import React from "react";
import { Hero, GetThis } from "sld-component-library";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExampleList from "../components/ExampleList";

import Places from "../data/Start.json";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-orange-bg">
        <Hero places={Places} title="Mango" />
      </div>
      <div className="is-white-bg">
        <GetThis flag="mango" />
      </div>
      <div className="is-light-grey-bg">
        <ExampleList />
      </div>
    </Layout>
  );
}
