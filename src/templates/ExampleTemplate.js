import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function ExampleTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="is-orange-bg is-white">
        <div className="row container-small pad-10-t pad-10-b pad-10-l">
          <div className="col-xs-12 ">
            <Link to="/" className="link-reverse">
              <h2 className="pad-10-l">{`< Home`}</h2>
            </Link>
            <div className="col-xs-12 col-md-8 pad-10-l pad-10-r">
              <h1 className="margin-3-b">{frontmatter.title}</h1>
              <div
                className={`${html ? "pad-20-b " : ""}`}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
