 # My Portfolio

 A personal portfolio website that presents my projects, technical skills, experience, and contact information in a clean and responsive layout.

 ## How it is built

 The portfolio is organized into reusable sections so it is easy to update as new work is added:

 - **Hero** — introduces me and highlights my main role.
 - **About** — provides a short professional summary.
 - **Skills** — lists the technologies and tools I use.
 - **Projects** — showcases selected work with descriptions and links.
 - **Contact** — makes it easy to get in touch.

 The interface is designed to be responsive, allowing it to work across desktop, tablet, and mobile screen sizes. Content, styling, and components are kept separate to make the project maintainable and extensible.

 ## Example project structure

 ```text
 myPortfolio/
 ├── public/          # Static assets and images
 ├── src/
 │   ├── components/  # Reusable UI sections
 │   ├── pages/       # Portfolio pages
 │   ├── assets/      # Local images and icons
 │   └── styles/      # Global and component styles
 ├── package.json     # Scripts and dependencies
 └── README.md
 ```

 ## Example project data

 ```js
 const projects = [
	 {
		 title: "Project name",
		 description: "A short description of the project and its purpose.",
		 technologies: ["HTML", "CSS", "JavaScript"],
		 liveUrl: "https://example.com",
		 sourceUrl: "https://github.com/username/project"
	 }
 ];
 ```

 ## Local development

 ```bash
 npm install
 npm run dev
 ```

 Open the local development URL shown in the terminal to view the portfolio. Update the project data, images, and content to personalize the site.
