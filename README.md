# Open-Source Graphic Design Portfolio Application  

Welcome to **Desings By Eyad**, an open-source graphic design portfolio application built with **Next.js**, **Tailwind CSS**, and **TypeScript**. This project combines cutting-edge web technologies to provide a seamless and modern design platform.  

## 🚀 Features  

- **Real-time Design Editor**: Powered by dynamic rendering with Next.js.  
- **Customizable Themes**: Styled with Tailwind CSS for flexibility.  
- **TypeScript Integration**: Ensures code reliability and scalability.  
- **Fast and Lightweight**: Optimized for speed and performance.  
- **Cross-Browser Support**: Works flawlessly across major browsers.  

## 📦 Installation  

Clone the repository and start building:  

```bash  
git clone [repo-url]  
cd [project-name]  
npm install  
npm run dev
```

## 📝 Add Protfolio Content

- Add the projects you create in the `content` folder:

```plaintext
content/
├── portfolio/
│   ├── designs/
│   ├── web/
```
- Add an `.mdx` file and follow these instructions

```markdown
---
title: Green Locks
description: Brand for mainfactoring and selling hair care products
thumbnail: /Imgs/green-locks.png
website: https://www.behance.net/gallery/191450493/Rebranding-Green-Locks-and-package-designs
Protype: Logo Design
---
![logo](https://mir-s3-cdn-cf.behance.net/project_modules/1400/f134d0191450493.65d126c37653f.png)
![package mockup](https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/218e67191450493.65cbbfa3d2fee.png)
![cosmetics mockup](https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/c703fb191450493.65d126c37b886.png)
```

Once you save the file, it will automatically add or update the content.

> If you want to add a new content type, such as a blog, refer to the [Contentlayer Documentation](https://contentlayer.dev/docs/getting-started-cddd76b7) for detailed instructions.

  
## 🖊️ Customization:

- Edit or add pages in the `src` and `app` directories.
- Add or edit components in the `Components` folder.
- To add links, edit the following files:
  - `NavList.tsx` for menu links
  - `ServicesList.tsx` for the services list
  - `NavContact.tsx` for contact links
- To customize contact form types, modify the `inputs.ts` file in the `types` folder.

Have fun, and good luck with your business! 💕
