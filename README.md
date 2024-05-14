# Filecoin Foundation Website

## Overview

This project is developed for the Filecoin Foundation, aiming to provide comprehensive information and resources about Filecoin's initiatives and contributions to the decentralized web. Utilizing Next.js for server-side rendering and static site generation, Tailwind CSS for styling, and other dependencies for Markdown processing and validation, this project aims to offer an accessible and user-friendly website for the Filecoin community.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repository/filecoin-foundation.git
cd filecoin-foundation
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This command starts a local development server on `http://localhost:3000`. The server will automatically reload if any of the source files are changed.

### Building for Production

The build process includes a pre-build step that converts the CMS configuration file (`public/admin/config.yml`) to JSON (located at ).

```bash
npm run build
```

This command generates a `.next` folder with the production build. To start the production server:

```bash
npm run start
```

### Formatting

This project uses [Prettier](https://prettier.io/) for automatic code formatting. The shared Prettier configuration is located in `.prettierrc.json`. If you use VSCode, there's a pointer to that file in `.vscode/settings.json` so that the shared configuration takes precedence over your default one.

### Linting

To lint and fix issues in the codebase:

```bash
npm run lint
```

#### Import Order

We maintain a specific order for import statements to make our code easier to read and to ensure that similar imports are grouped. Our ordering rules are as follows:

- Node.js built-in modules (e.g., `fs`, `path`)
- External modules (e.g., `react`, `next/**`)
- Internal aliases (e.g., `@/components/**`, `@/styles/**`)

## Technologies

- **Next.js 13.4.19**: For server-side rendering, static site generation, and routing.
- **Tailwind CSS**: For utility-first CSS styling.
- **React 18**: For building the user interface.
- **clsx**: For conditionally joining `classNames` together.

## Integrations and Configurations

This project is built with specific integrations to enhance its functionality and user experience. Below are details about our content management system (CMS) and authentication solution.

### Decap CMS Integration

We use [Decap CMS](https://decapcms.org/docs/intro/), formerly known as Netlify CMS, for content management, allowing non-technical team members to update website content easily.

Decap CMS is a Git-based content management system, meaning that content is managed just like any other file in our repository, using Git for version control.

All the content managed through Decap CMS is stored in `src/app/content/`. This directory includes various Markdown files that the CMS edits. Each file represents a different section or page of the website, structured for easy editing and updates.

#### Decap CMS Configuration

The Decap CMS setup includes two configuration files:

1. `public/admin/config.yml` - This file primarily contains the schema and metadata for the content but also includes authentication settings among other things.
2. `public/admin/index.html` - This HTML template enables viewing and editing the content in a web interface. Access it via [/admin/index.html](http://localhost:3000/admin/index.html#/).

Additionally, `src/app/_data/cmsConfigSchema.json` is a file autogenerated when the server starts, using `predev` and `prebuild` commands.

#### Markdown Files

We use [Markdown](https://www.markdownguide.org/cheat-sheet/) files for the content of our websites. It allows us to convert human-readable text into HTML.

Each Markdown file typically consists of two parts:

1. The header section: Delimited with triple dashes `---`, this YAML-formatted section contains metadata about the file, similar to what you would find in HTML `<head>` tags: title, description, image links, etc.
2. The body section: Contains the content itself in Markdown format.

Here’s an example:

```markdown
---
title: Hello
slug: home
---

# Hello world!

Lorem ipsum
```

Metadata is processed using the [gray-matter](https://www.npmjs.com/package/gray-matter) library, transforming it into an object usable within our code to display content in relevant places:

```javascript
{
  data: { title: 'Hello', slug: 'home' },
  content: '<h1>Hello world!</h1><p>Lorem ipsum</p>',
}
```

#### How to Update Content

##### Updating Existing Content

If you only need to update existing content, there is no need to update Decap’s configuration. Modify the markdown file for the content you wish to update. For example, to change the title on the home page:

1. Open `src/content/pages/home.md`.
2. Edit the title in the header section.

The website should hot reload and the changes should appear immediately in your local development environment. Once you’re satisfied with the updates, commit your changes via Git.

##### Adding or Removing Content

If you need to add or remove content from a page or a section, like a subtitle on the home page, then Decap CMS must be informed. Hence, you need to update both the Markdown and the configuration file.

1. Add the new content in the Markdown file, e.g., a subtitle in the header of `src/content/pages/home.md`.
2. Update `public/admin/config.yml` to reflect this addition under the appropriate section, for example:

### Authenticating with Netlify Identity and Git Gateway

Our project integrates with Netlify Identity and Git Gateway for user authentication and content management. This integration allows authorized users to access the CMS and make changes to the website content. The authentication process is handled through Netlify Identity, while Git Gateway provides secure access to the Git repository. For more information, please refer to the Decap CMS documentation on [Git Gateway](https://decapcms.org/docs/git-gateway-backend/).

```yaml
# collections -> name: "pages” -> name: "home”

fields:
  - *header_config
  - name: "subtitle"
    label: "Subtitle"
    widget: "string"
    required: true
```

The `widget` key is important and worth mentioning. Widgets define the content type of each field: `String`, `Number`, `Boolean`, `DateTime`, `File`, `Relation`, etc. The full list of widgets and their purpose can be found in the [Decap CMS documentation](https://decapcms.org/docs/widgets/).

The `Relation` widget is how we create links between related pieces of content, such as associating a featured post with a blog page. Relations usually rely on slugs, which are unique identifiers, to link content together.

### Authenticating with Netlify Identity and Git Gateway

Our project integrates with Netlify Identity and Git Gateway for user authentication and content management. This integration allows authorized users to access the CMS and make changes to the website content. The authentication process is handled through Netlify Identity, while Git Gateway provides secure access to the Git repository. For more information, please refer to the Decap CMS documentation on [Git Gateway](https://decapcms.org/docs/git-gateway-backend/).

### Working with the Local Git Repository

You can connect Decap CMS to the local Git repository. To do this, follow these steps:

1. Run `npx decap-server`
2. Run `npm run dev`
3. Open http://localhost:3000/admin/index.html

Please refer to the Decap CMS documentation for more information and detailed instructions on [working with a local Git repository](https://decapcms.org/docs/working-with-a-local-git-repository/).

## Continuous Integration and Deployment

Our project leverages GitHub Actions for Continuous Integration (CI) to automate the testing and linting of code. This ensures that every push and pull request to the `main` branch meets our quality standards and passes all tests. Below are the key workflows integrated into our CI process:

### Cypress Tests

Our CI pipeline includes running end-to-end (E2E) tests with Cypress on every push and pull request to the `main` branch. This workflow ensures that the application behaves as expected from a user's perspective.

### Lint Code Base

We enforce code quality standards through a linting workflow that runs ESLint on every push and pull request to the `main` branch. This workflow identifies and reports patterns found in ECMAScript/JavaScript code, to make code more consistent and avoid bugs.

### Contributing

Contributors are encouraged to ensure their code passes these checks before submitting pull requests. Local setup instructions are provided to run these tests and linters, emulating the CI environment to catch and resolve issues early in the development process.

## End-to-End Testing with Cypress

To ensure the highest quality of user experience, we employ Cypress for end-to-end (E2E) testing. These tests simulate real user interactions within the application to catch any potential issues before they affect our users.

### Running Tests Locally

To run Cypress tests on your local machine:

1. Ensure the development server is running (`npm run dev`).
2. Open Cypress Test Runner with `npx cypress open` for interactive testing.
3. Alternatively, run `npx cypress run` to execute tests in headless mode directly from the terminal.

### Writing and Modifying Tests

Cypress tests are located in the `cypress/integration` directory.

This hands-on approach to testing complements our CI/CD pipeline, allowing developers to verify changes locally before committing them. For more information on Cypress and E2E testing strategies, visit [Cypress Documentation](https://docs.cypress.io).

## Development Guidelines

To maintain the quality and consistency of our codebase, we have established a set of development guidelines. Contributors are encouraged to follow these practices when making contributions to the project.

### Component Organization

Store all React components in the `_components` directory, including page-specific ones.

### Component Exports

Use named exports for React components to maintain consistency and support efficient tree shaking. This practice facilitates easier and more predictable imports across the project.

### Naming Props

When defining props for components, explicitly name the props type rather than using a generic `Props` type. For example,

```typescript
type BadgeProps = {
  featured: boolean
  children?: string
}
```

### Paths and URLs

- **Centralized Paths**: Utilize the `PATHS` object for defining and accessing paths throughout the application. See `_constants/paths.ts`

- **Site Metadata and URLs**: Reference site metadata and URLs using centralized constants to ensure consistency and ease of maintenance. See `_constants/siteMetadata.ts`

### Adding New Pages

When adding a new page to the project, please ensure the following:

1. **Update PATHS Configuration**: Ensure the `PATHS` object includes configurations for new content types, specifying paths, labels, and content directory paths. See `_constants/paths.ts`

2. **Metadata and SEO**: Each new page should have associated metadata and SEO tags defined. Use the `createMetadata` function to set up a page's metadata correctly. Example:

```javascript
export const metadata = createMetadata(seo, PATHS.ABOUT.path)
```

3. **Structured Data**: Include structured data for the new page to enhance search engine visibility and accessibility. Use the `generateWebPageStructuredData` function to create structured data for the page, which provides the base structured data. Example:

```javascript
const aboutPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ABOUT.path,
})
```

This can be further customized based on the page's content and structure. Example:

````javascript
const aboutPageStructuredData: WithContext<WebPage> = {
  ...aboutPageBaseData,
  about: {
    '@type': 'Organization',
    name: ORGANIZATION_NAME,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Media and collaboration inquiries',
        email: FILECOIN_FOUNDATION_URLS.email,
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Ecosystem grants inquiries',
        email: FILECOIN_FOUNDATION_URLS.grants.email,
      },
    ],
  },
  sameAs: Object.values(FILECOIN_FOUNDATION_URLS.social).map(
    (link) => link.href
  ),
}
```

1. **Testing**: Ensure that tests are added to verify the presence of metadata and structured data on the new page. These tests are crucial for maintaining the integrity of the site's SEO and ensuring that all pages meet our standards for content visibility.

2. **Updating the Sitemap**: When adding new dynamic content (such as blog posts, ecosystem projects, or events) that isn't automatically included in the sitemap through static routing, it's essential to manually update the sitemap with the new page's details. This step is crucial for SEO, helping ensure that search engines can easily discover and index these new pages.

Following these guidelines helps ensure that our website remains consistent, accessible, and search engine friendly.

## Contributing

We welcome contributions to the Filecoin Foundation website!

## License

This project is licensed under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
````
