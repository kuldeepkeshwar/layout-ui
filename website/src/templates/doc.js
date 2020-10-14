import {
  Anchor,
  Blockquote,
  H3,
  Paragraph,
  Pre,
  Title,
} from '../components/markdown-overrides';

import { Layout } from '../components/Layout';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Playground from '../components/Playground';
import React from 'react';
import { SEO } from '../components/SEO';
import StaticCode from '../components/StaticCode';
import { graphql } from 'gatsby';

function Code({ children, editor, metastring }) {
  if (editor === 'live') {
    const compiled = metastring.replace('editor=live compiled=', '').trim();
    return <Playground code={children} compiled={compiled}></Playground>;
  } else if (editor === 'static') {
    const code = children.replace('editor=static', '').trim();
    return <StaticCode code={code}></StaticCode>;
  } else {
    return children;
  }
}
export default ({ data: { doc } }) => {
  const {
    fields: { slug, title },
    frontmatter: { title: _title },
    body,
  } = doc;

  const __title = _title || title || slug;
  return (
    <>
      <SEO title={__title} />
      <Layout>
        <Title>{__title}</Title>
        <MDXProvider
          components={{
            'live-code': Playground,
            'static-code': StaticCode,
            code: Code,
            blockquote: Blockquote,
            p: Paragraph,
            pre: Pre,
            h3: H3,
            a: Anchor,
          }}
        >
          <MDXRenderer children={body} />
        </MDXProvider>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    doc: mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
        title
      }
      frontmatter {
        title
      }
    }
  }
`;
