# Swift Base SvelteKit Site

This is the official website for Swift Base, built with SvelteKit and designed for deployment to GitHub Pages with automatic custom domain detection.

## Features

- 🚀 **SvelteKit** with static site generation
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive design** with dark/light mode
- 🔧 **TypeScript** support
- 📦 **Custom YAML content system**
- 🌐 **Automatic GitHub Pages deployment**
- 🏠 **Smart custom domain detection**

## Quick Start

1. **Use this template** to create your repository
2. **Clone your new repository**
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```

## Deployment to GitHub Pages

This template automatically deploys to GitHub Pages and intelligently detects whether you're using a custom domain or the default GitHub Pages subdirectory.

### Option 1: Default GitHub Pages (username.github.io/repository-name)

**No additional setup required!** The template will automatically:
- Detect that no custom domain is configured
- Set the correct base path for subdirectory deployment
- Deploy to `https://yourusername.github.io/your-repo-name/`

### Option 2: Custom Domain

1. **Add your domain** to a `CNAME` file in the `static/` directory:
   ```
   static/CNAME
   ```
   Content should be just your domain:
   ```
   yourdomain.com
   ```

2. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"
   - Add your custom domain in the "Custom domain" field

The template will automatically:
- Detect the `CNAME` file exists
- Set the base path to root for custom domain deployment
- Deploy to your custom domain

### How It Works

The deployment workflow automatically detects your setup:

```yaml
- name: Detect deployment type
  run: |
    if [ -f "static/CNAME" ]; then
      echo "Custom domain detected - deploying to root path"
      echo "base_path=" >> $GITHUB_OUTPUT
    else
      echo "GitHub Pages subdirectory - deploying to /repo-name"
      echo "base_path=/repo-name" >> $GITHUB_OUTPUT
    fi
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run SvelteKit sync and type checking
- `npm run lint` - Run ESLint
- `npm run typecheck` - TypeScript type checking

### Project Structure

```
src/
├── lib/
│   ├── components/     # Svelte components
│   ├── content.ts      # Content loading utilities
│   └── types.ts        # TypeScript interfaces
├── routes/             # SvelteKit file-based routing
│   ├── +layout.svelte  # Root layout
│   └── +page.svelte    # Homepage
├── app.html           # HTML template
└── app.css           # Global styles

content/               # YAML content files
static/               # Static assets
```

### Content Management

Content is managed through YAML files in the `content/` directory:

- `content/index.yml` - Homepage content
- `content/examples.yml` - Code examples
- `content/news.yml` - News and updates
- `content/packages.yml` - Package ecosystem

### Styling

This template uses:
- **Tailwind CSS** for utility-first styling
- **Custom design system** with orange primary color
- **Dark/light mode** support
- **Heroicons** and other icon sets via Iconify

## Customization

### Updating Content

Edit the YAML files in the `content/` directory to customize your site content.

### Changing Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: colors.orange,  // Change to your preferred color
  gray: colors.zinc,
}
```

### Adding Pages

Create new pages by adding `+page.svelte` files in the `src/routes/` directory following SvelteKit's file-based routing.

## Troubleshooting

### 404 Errors on Deployment

If you're getting 404 errors for JavaScript files:

1. **Check if you have a custom domain**: If yes, ensure you have a `CNAME` file in `static/`
2. **Verify GitHub Pages settings**: Make sure source is set to "GitHub Actions"
3. **Check deployment logs**: Look for BASE_PATH detection messages in Actions logs

### Development Issues

- **Port already in use**: Change the port with `npm run dev -- --port 3001`
- **Type errors**: Run `npm run check` to identify TypeScript issues
- **Linting errors**: Run `npm run lint` to check code style

## License

MIT License - feel free to use this template for your projects!

## Support

- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)