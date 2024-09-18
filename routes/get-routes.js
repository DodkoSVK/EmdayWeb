export function getRoutes(app) {
    app.get("/", async(req, res) => {
        console.log(`🟠 Request "${req.url}". Render to home.ejs.`);
        res.render('home.ejs', { pagetitle: 'Home', cssfile: 'style.css' });
    });
}

