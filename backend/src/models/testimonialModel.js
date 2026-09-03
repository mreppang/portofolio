const db = require("../config/db");

const getAllTestimonials = (callback) => {
    const query = `
        SELECT 
            id, name, role, company, 
            content AS quote, 
            content,
            avatar_url AS avatar,
            avatar_url,
            rating AS stars,
            rating,
            created_at 
        FROM testimonials 
        ORDER BY created_at DESC
    `;
    db.query(query, (err, results) => {
        callback(err, results);
    });
};

module.exports = {
    getAllTestimonials,
};