const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json');
const coursedetails = require('./data/courseinfo.json');

app.get('/', (req, res) => {
    res.send('ok');
});
//categories 
app.get('/categories', (req, res) => {
    res.send(categories)
});
//find via catagoryid 
app.get('/category/:id', (req, res) => {
        const id = req.params.id;
         if (id === '07') {
            res.send();
        }
        else {
            const category_courses = coursedetails.filter(n => n.category_id === id);
            res.send(category_courses);
        }
})
//course 


 app.get('/course/:id', (req, res) => {
     const id = req.params.id;
    const selectedCourse = coursedetails.find(n => n._id === id);
     res.send(selectedCourse);
 });

app.listen(port, () => {
    console.log('Server running on port', port);
})
module.exports =app