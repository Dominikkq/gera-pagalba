import React from 'react'

export default function Process() {
  return (
<div class="">
  
  <h2 class="md:text-4xl text-2xl font-bold text-center text-brand pb-20">Procesas</h2>
  <div class="md:flex justify-center">
    <div class="pb-8  px-4">
      <div class="flex md:pb-6 pb-0">
        <img class="md:mx-auto mb-3 p-2" alt="icon" src="https://www.w3schools.com/spaces/files/window.10dd677d.svg"/>
        <img alt="line" src="https://www.w3schools.com/spaces/files/Line-3.f074919a.svg" class="p-3 mt-2 md:block hidden"/>  
      </div>
      <a class="text-brand2 font-semibold underline" href='/registracija'>Registracija</a>
      <div class="text-brand2 font-semibold">Prireiks tik vardo, pavardės ir elektroninio pašto</div>

    </div>
    
    <div class="pb-8  px-4">
      <div class="flex md:pb-6 pb-0">
        <img class="mb-3 p-2" alt="icon" src="https://www.w3schools.com/spaces/files/layout-wtf.2da17533.svg"/>
        <img alt="line" src="https://www.w3schools.com/spaces/files/Line-2.cdec3617.svg" class="p-3 mt-2 md:block hidden"/>
      </div>
      <a class="text-brand2 font-semibold underline" href='/registracija'>Specialisto išsirinkimas</a>
      <div class="text-brand2 font-semibold">Išsirinkite specialistą iš 20+ skiringų kategorijų</div>
    </div>
    
    <div class="pb-8  px-4">
      <div class="flex md:pb-6 pb-0">
        <img class="mb-3 p-2" alt="icon" src="https://www.w3schools.com/spaces/files/Frame.a8fb68c5.svg"/>
      </div>
      <div class="text-brand2 font-semibold">Vizito rezervavimas</div>
      <div class="text-brand2 font-semibold">Išsirinkite vizito laiką patogų Jums</div>
    </div>
    
    </div>
  </div>

  );
}
