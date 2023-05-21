import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { formatISO } from "date-fns";
import axios from "axios";
import Meta from "../../components/Meta";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import ltLocale from "@fullcalendar/core/locales/lt";
import "tippy.js/dist/tippy.css";
import "@fontsource/montserrat";
import { isWeekend, addDays } from "date-fns";
import { Tooltip } from "react-tooltip";

import Image from "next/image";
import blank from "../../components/assets/icons/blank.png";

import {
  showConfirmAppointmentModal,
  statusModalShow,
  reasonModalShow,
  busyModalShow,
} from "../../redux/counterSlice";

const User = () => {
  const router = useRouter();
  const {
    query: { user: pid },
  } = router;
  const dispatch = useDispatch();
  const calendarRef = useRef(null);
  const [CalendarSlotDuration, setCalendarSlotDuration] = useState("00:30:00");
  const [AppointmentEvents, setAppointmentEvents] = useState([]);
  const [UserAppointments, setUserAppointments] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [ShowProfile, setShowProfile] = useState(false);
  const [AppointmentDate, setAppointmentDate] = useState("");
  const [bgEvents, setBgEvents] = useState([]);
  const [AppointmentAccurate, setAppointmentAccurate] = useState({});
  const [Appointment, setAppointment] = useState("");
  const [DoctorAppointments, setDoctorAppointments] = useState("");
  const [CurrentUser, setCurrentUser] = useState([]);
  const [User, setUser] = useState([]);

  const CancelAppointment = async (appointmentId) => {
    if (CurrentUser.userId == pid) {
      dispatch(reasonModalShow(appointmentId));
    } else {
      const response = await axios.delete(
        `https://www.regreto.com:5000/appointmentsCancel/${CurrentUser.userId}/${appointmentId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
    }
  };

  const handleDateSelect = (info) => {
    const start = info.start.toLocaleString([], {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const end = info.end.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    setAppointmentAccurate(info);

    if (CurrentUser.userId) {
      if (CurrentUser.doctor) {
        dispatch(
          busyModalShow({
            date: `${start}-${end}`,
            start: info.startStr,
            end: info.endStr,
          })
        );
      } else {
        dispatch(
          showConfirmAppointmentModal({
            date: `${start}-${end}`,
            user: CurrentUser.userId,
            doctor: User.name + " " + User.lastname,
            doctorId: User.userId,

            start: info.startStr,
            end: info.endStr,
          })
        );
      }
      setAppointment(`${start}-${end}`);

      setAppointmentDate({
        start: info.startStr,
        end: info.endStr,
      });

      if (info) {
        const calendarApi = info.view.calendar;
        if (calendarApi.view.currentStart && calendarApi.view.currentEnd) {
          const events = calendarApi.getEvents();

          var cutLength = 2;
          if (AppointmentEvents.length > cutLength) {
            cutLength = AppointmentEvents.length;
          }

          const lastEvent = events[AppointmentEvents.length + 1 - 1];
          if (lastEvent) {
            lastEvent.remove();
          }
        }
        calendarApi.addEvent({
          start: info.startStr,
          end: info.endStr,
        });
      }
    } else {
      localStorage.setItem("redirect_prisijungimas", window.location.href);
      window.location.href = "/prisijungimas";
    }
  };

  const handleTimeClick = (interval) => {
    const hours = Math.floor(interval / 60);
    const minutes = interval % 60;
    const seconds = 0;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    setCalendarSlotDuration(formattedTime);
    setSelectedButton(interval);
  };

  const handleSelectAllow = (info) => {
    const { start, end } = info;

    const now = new Date();
    const isSameDay = now.toDateString() === start.toDateString();

    // Check if the selected date range overlaps with any existing appointments
    const isOverlapping = AppointmentEvents.some(
      (event) =>
        start.getTime() < new Date(event.end).getTime() &&
        end.getTime() > new Date(event.start).getTime()
    );

    // If the selected appointment is overlapping or in the past, return false
    if (
      (isSameDay && start <= new Date(now.getTime() + (15 - 1) * 60000)) ||
      start < now ||
      isOverlapping // Add this condition to prevent overlapping appointments
    ) {
      updateBgEvents();
      return false;
    }

    return true;
  };
  const updateBgEvents = () => {
    const now = new Date();
    const MINUTES_IN_FUTURE = 15;
    const allowedStartTime = new Date(
      now.getTime() + MINUTES_IN_FUTURE * 60000
    );
    setBgEvents([
      {
        start: "1900-01-01T00:00:00",
        end: formatISO(allowedStartTime),
        display: "background",
        backgroundColor: "#c8c8c8",
        allDay: false,
      },
    ]);
  };
  {
    /* RATINGS */
  }
  const [rating, setRating] = useState(0);
  const handleStarClick = async (index, doctorId, appointmentId) => {
    await axios.post(
      `https://www.regreto.com:5000/rateDoctor`,
      {
        doctorId: doctorId,
        userId: CurrentUser.userId,
        rating: index,
        appointmentId: appointmentId,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    location.reload();
    setRating(index);
    setStars(index);
  };

  const handleStarHover = (index) => {
    setRating(index);
  };

  const handleStarLeave = () => {
    setRating(0);
  };

  function formatHour(hour) {
    const hourString = hour < 10 ? `0${hour}` : `${hour}`;
    return `${hourString}:00:00`;
  }

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    async function fetchData() {
      await GetUserData();
      if (localStorage.getItem("token")) {
        await GetCurrentUserData();
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("successPay_success") === "true") {
      localStorage.setItem("successPay_success", false);
      dispatch(statusModalShow());
    }
  });

  useEffect(() => {
    const updateBgEvents = () => {
      const now = new Date();
      const MINUTES_IN_FUTURE = 15;
      const allowedStartTime = new Date(
        now.getTime() + MINUTES_IN_FUTURE * 60000
      );
      setBgEvents([
        {
          start: "1900-01-01T00:00:00",
          end: formatISO(allowedStartTime),
          display: "background",
          backgroundColor: "#c8c8c8",
          allDay: false,
        },
      ]);
    };

    updateBgEvents();
  }, []);
  const [shouldSkipWeekend, setShouldSkipWeekend] = useState(false);

  async function GetUserData() {
    const userId = window.location.href.split("/").pop();
    try {
      const response = await axios.get(
        `https://www.regreto.com:5000/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(response.data);
      if (response.data.doctor) {
        const date = new Date();
        setCurrentDate(date);
        setShouldSkipWeekend(
          isWeekend(date) &&
            response.data.weekendHours.from === 0 &&
            response.data.weekendHours.to === 0
        );
        setShowProfile(true);
        await GetAppointments(response.data.userId);
      } else {
        if (response.data.userId == pid) {
          GetUserAppointments(response.data.userId);
        }
      }
    } catch (error) {
      if (error.response && error.response.data.error === "Unauthorized") {
        console.error("Unauthorized access: Please login again");
        localStorage.setItem("token", "");
        location.reload();
      } else {
        console.error(error.message);
      }
    }
  }
  async function GetCurrentUserData() {
    if (localStorage.getItem("token")) {
      const response = await axios.get("https://www.regreto.com:5000/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setCurrentUser(response.data);

      setShowProfile(true);
      if (!response.data.doctor) {
        GetUserAppointments(response.data.userId);
      }
    }
  }

  async function GetUserAppointments() {
    try {
      const response = await axios.get(
        `https://www.regreto.com:5000/appointmentsMade`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserAppointments(response.data.appointmentsMade);
    } catch (error) {
      if (error.response && error.response.data.error === "Invalid Token") {
        console.error("Unauthorized access: Please login again");
        localStorage.setItem("token", "");
        location.reload();
      } else {
        console.error(error.message);
      }
    }
  }

  async function GetAppointments(userId) {
    try {
      const response = await axios.get(
        `https://www.regreto.com:5000/appointments/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const array = [...response.data.appointments, ...response.data.busy];

      const arrayWithColors = array.map((event) => ({
        ...event,
        backgroundColor: "#F08080",
        borderColor: "#F08080",
      }));

      setAppointmentEvents(arrayWithColors);
      setDoctorAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function renderEventContent(eventInfo) {
    return (
      <div>
        <div className="fc-time">{eventInfo.timeText}</div>
      </div>
    );
  }

  return (
    <>
      <Meta title="GeraPagalba" />
      <div className="">
        <div className="relative h-[18.75rem]">
          <Image
            style={{ width: "100%" }}
            src="/images/gradient.jpg"
            alt="gradient"
            layout="fill"
          />
        </div>

        {ShowProfile && (
          <section className="relative pb-12 pt-28">
            <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <figure className="relative h-40 w-40 dark:border-jacarta-600 rounded-xl border-[5px] border-white">
                <Image
                  src={User.profilePhoto || blank}
                  layout="fill"
                  objectFit="contain"
                  className="dark:border-jacarta-600 rounded-xl border-[5px] border-white"
                />
                <div
                  className="dark:border-jacarta-600 bg-green absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  {User.verified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-[.875rem] w-[.875rem] fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  )}
                </div>
              </figure>
            </div>

            <div className="text-center">
              <h2 className="font-display text-jacarta-700 mb-2 text-4xl font-medium dark:text-white">
                {User.name} {User.lastname}
              </h2>
              {User.job && (
                <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4">
                  <span>{User.job}</span>
                </div>
              )}
              <p className="dark:text-jacarta-300 mx-auto mb-2 max-w-xl text-lg">
                {User.description}
              </p>
              {User.rates && (
                <div className="flex items-center justify-center">
                  <p className="text-lg font-bold mr-1">
                    {User.averageRating}/5
                  </p>
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 57.94 57.94"
                    style={{ marginTop: "5px" }}
                  >
                    <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"></path>
                  </svg>
                </div>
              )}
            </div>
          </section>
        )}

        {CurrentUser.userId && CurrentUser.userId === User.userId && (
          <div className="appointment_date_table">
            <h5
              className="font-display text-jacarta-700 mb-2 text-4md font-medium"
              style={{
                background: "#00E573",
                borderRadius: "15px",
                padding: "2px",
                paddingRight: "10px",
                paddingLeft: "10px",
                color: "white",
                width: "fit-content",
                margin: "auto",
              }}
            >
              Konsultacijos
            </h5>
            <table>
              <thead>
                {UserAppointments.length === 0 &&
                DoctorAppointments.appointments?.length === 0 ? (
                  <tr>
                    <th colSpan="5" style={{ textAlign: "center" }}>
                      Nėra konsultacijų
                    </th>
                  </tr>
                ) : (
                  <tr>
                    <th>Data</th>
                    {DoctorAppointments.appointments?.length === 0 && (
                      <th>Daktaras</th>
                    )}
                    <th>Komentarai</th>
                    <th>Konsultacija</th>
                    <th>Statusas</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {UserAppointments.length > 0 &&
                  UserAppointments.map((appointment) => (
                    <tr key={appointment.appointmentId}>
                      <td>{new Date(appointment.start).toLocaleString()}</td>
                      <td>{appointment.doctorFullName}</td>
                      <td>
                        <a
                          className="custom-tooltip"
                          data-tooltip-content={appointment.notes}
                        >
                          {appointment.notes.length > 20
                            ? appointment.notes.substring(0, 20) + "..."
                            : appointment.notes}
                        </a>

                        <Tooltip
                          className="high-tooltip"
                          anchorSelect=".custom-tooltip"
                        />
                      </td>
                      <td>
                        {new Date(appointment.end) < new Date() ? (
                          <a style={{ fontWeight: "500" }}>Baigta</a>
                        ) : (
                          <a
                            style={{
                              color: "#039F52",
                              fontWeight: "500",
                            }}
                            href={appointment.appointmentUrl}
                          >
                            Jungtis
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}

                {DoctorAppointments?.appointments?.length > 0 &&
                  DoctorAppointments.appointments.map((appointment) => (
                    <tr key={appointment.appointmentId}>
                      <td>{new Date(appointment.start).toLocaleString()}</td>
                      <td>
                        <a
                          className="custom-tooltip"
                          data-tooltip-content={appointment.notes}
                        >
                          {appointment.notes.length > 20
                            ? appointment.notes.substring(0, 20) + "..."
                            : appointment.notes}
                        </a>

                        <Tooltip
                          className="high-tooltip"
                          anchorSelect=".custom-tooltip"
                        />
                      </td>
                      <td>
                        {new Date(appointment.end) < new Date() ? (
                          <a style={{ fontWeight: "500" }}>Baigta</a>
                        ) : (
                          <a
                            style={{
                              color: "#039F52",
                              fontWeight: "500",
                            }}
                            href={appointment.appointmentUrl}
                          >
                            Jungtis
                          </a>
                        )}
                      </td>

                      <td>
                        {new Date(appointment.end) < new Date() ? (
                          <a style={{ fontWeight: "500" }}>Baigta</a>
                        ) : (
                          <a
                            onClick={() =>
                              CancelAppointment(appointment.appointmentId)
                            }
                          >
                            Atšaukti
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {User.doctor && (
          <div className="calendar" style={{ margin: "auto" }}>
            <div className="button-group">
              <h5
                className="font-display text-jacarta-700 mb-2 text-4md font-medium"
                style={{
                  background: "#00E573",
                  borderRadius: "15px",
                  padding: "2px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  color: "white",
                }}
              >
                Sesijos Trukmė
              </h5>
              <div className="button-wrapper">
                {User?.rates &&
                  Object.keys(User?.rates)
                    .filter((time) => User.rates[time] > 0)
                    .map((time) => {
                      const rate = User.rates[time];
                      if (rate === 0 && time !== "30") {
                        return null;
                      }
                      return (
                        <button
                          key={time}
                          className={`button${
                            selectedButton === Number(time) ? " selected" : ""
                          }`}
                          onClick={() => handleTimeClick(Number(time))}
                        >
                          {time} min / {rate}€
                        </button>
                      );
                    })}
              </div>
            </div>
            {User.doctor && AppointmentEvents.length > 0 && (
              <div className="calendar">
                {console.log(User.weekendHours)}
                <FullCalendar
                  ref={calendarRef}
                  contentHeight="auto"
                  slotMinHeight={500}
                  longPressDelay={1}
                  slotMinTime={formatHour(User.workdayHours.from)}
                  slotMaxTime={formatHour(User.workdayHours.to)}
                  eventLongPressDelay={1}
                  selectLongPressDelay={1}
                  plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                  eventBackgroundColor={
                    CurrentUser.doctor ? "#F08080" : "#00E573"
                  }
                  eventBorderColor={CurrentUser.doctor ? "#F08080" : "#00E573"}
                  select={(info) => {
                    updateBgEvents();
                    handleDateSelect(info);
                  }}
                  selectable={true}
                  initialView="timeGridWeek"
                  events={[...AppointmentEvents, ...bgEvents]}
                  slotDuration={`${CalendarSlotDuration}`}
                  slotLabelContent={(arg) => {
                    const time = arg.date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                    return time;
                  }}
                  slotLabelInterval={{ minutes: 15 }}
                  allDaySlot={false}
                  headerToolbar={{
                    start: "prev,next today",
                    center: "title",
                    end: "timeGridWeek,timeGridDay",
                  }}
                  selectMirror={true}
                  locales={[ltLocale]}
                  locale="lt"
                  weekends={User.weekendHours.from !== 0} // Ensure the calendar shows weekends only if user works on weekends
                  initialDate={
                    shouldSkipWeekend ? addDays(currentDate, 2) : currentDate
                  } // Skip to next week if current day is a weekend and user doesn't work on weekends
                  eventContent={(eventInfo) => {
                    return eventInfo.timeText;
                  }}
                  selectAllow={(info) => handleSelectAllow(info)}
                  selectOverlap={(event) => event.display !== "background"}
                />
              </div>
            )}
          </div>
        )}
        <div style={{ height: "5rem" }}></div>
      </div>
    </>
  );
};

export default User;
