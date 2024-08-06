# eodash Configuration and Deployment Template

This is an instance template for [@eodash/eodash](https://github.com/eodash/eodash). Check Github's guide on [how to create a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Prerequisites

- Node v20.15.1 or higher

## Get Started

Install all the required dependecies:

```bash
npm run install
```

Run the dev server:

```bash
npm run dev
```

To compile and minify for production:

```bash
npm run build
```

To preview the compiled production files :

```bash
npm run preview
```

To compile and minify as a web component library:

```bash
npm run build -- --lib
```

Format using prettier:

```bash
npm run format
```

Run linter:

```bash
npm run lint
```

## Folder Structure

    .
    ├── public            # statically served files
    ├── src               # Client source code that hosts the microfrontends and renders the dashboard
    │    ├── widgets      # Contains custom defined internal widgets
    │    └─  main.js      # eodash main entry point
    │
    └── README.md
