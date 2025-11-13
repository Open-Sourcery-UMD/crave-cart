function extractRecipes() {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    let recipes = [];
    scripts.forEach(script => {
        try {
            console.log("LD+JSON block:", JSON.parse(script.textContent.trim()));
        } catch(e) {
            console.log("JSON parse error:", e);
        }
    });
    return recipes;
}
console.log("Found:", extractRecipes());