# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for Swift Base, built with SvelteKit and custom Svelte components. It's a static site that showcases the framework with documentation links, examples, news, and ecosystem information.

When connected to the svelte-llm MCP server, you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list_sections
Use this FIRST to discover all available documentation sections. Returns a structured list with titles and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get_documentation
Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list_sections tool, you MUST analyze the returned documentation sections and then use the get_documentation tool to fetch ALL documentation sections that are relevant for the users task.

## Development Commands

- `npm run dev` or `vite dev` - Start development server
- `npm run build` or `vite build` - Build for production (static generation)
- `npm run preview` or `vite preview` - Preview production build
- `npm run check` - Run SvelteKit sync and type checking
- `npm run lint` or `eslint .` - Run ESLint
- `npm run typecheck` or `svelte-check --tsconfig ./tsconfig.json` - Run TypeScript type checking

## Architecture

### Framework Stack
- **SvelteKit** - Svelte framework with SSR/SSG capabilities via @sveltejs/adapter-static
- **Custom Svelte Components** - Hand-built UI components replacing Nuxt UI Pro
- **Custom YAML Content System** - Content management via js-yaml and custom loaders
- **TypeScript** - Type safety with custom interfaces for content
- **ESLint** - Code linting with stylistic rules
- **Tailwind CSS** - Utility-first styling with custom design system
- **Iconify/Svelte** - Icon system for consistent iconography

### Directory Structure
- `src/lib/components/` - Svelte components (AppHeader, AppFooter, LandingHero, etc.)
- `src/routes/` - File-based routing with Svelte pages (+page.svelte, +layout.svelte)
- `src/lib/` - Utilities, types, and content loading functions
- `content/` - YAML configuration files and markdown snippets
- `public/` - Static assets (images, icons)
- `src/app.html` - Root HTML template
- `src/app.css` - Global styles and Tailwind configuration

### Key Configuration
- **Theme**: Orange primary color, zinc gray, system color mode preference
- **Icons**: Heroicons, Simple Icons, MDI, Fluent collections
- **Routing**: File-based routing with server-side redirects and Discord integration
- **Content**: Syntax highlighting for JSON, YAML, shell, Swift

### Content Management
The site uses a custom YAML content loading system via `src/lib/content.ts`. Content is structured as YAML files in the `content/` directory. Configuration files like `examples.yml`, `news.yml`, `packages.yml`, `index.yml` define structured data for different sections. Markdown snippets are processed using the `marked` library and embedded as HTML.

### Styling System
Uses a custom design system with rounded-full buttons and inputs, custom header/footer styling, and a carefully configured color scheme optimized for both light and dark modes.