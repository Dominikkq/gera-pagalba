import React from "react";
import Collection_category from "../components/collectrions/collection_category";
import { Feature_collections, HeadLine } from "../components/component";
import Meta from "../components/Meta";
import Hero_5 from "../components/hero/hero_5";

import FilterCategoryItem from "../components/categories/filterCategoryItem";

const Index = () => {
  return (
    <>
      <Meta title="PickyBets - Testing" />
      <Hero_5 />

      <Feature_collections />
      <Collection_category bgWhite={true} />
      <div>
        {/* <!-- Trending Categories --> */}
        <section className="py-24">
          <div className="container">
            <HeadLine
              text="Specialistai"
              classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white"
            />
            <FilterCategoryItem />
          </div>
        </section>
        {/* <!-- end trending categories --> */}
      </div>
    </>
  );
};

export default Index;
