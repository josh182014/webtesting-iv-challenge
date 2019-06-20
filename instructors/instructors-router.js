const router = require('express').Router();

const Instructors = require('./instructors-model')

router.get('/', (req, res) => {
    Instructors.find()
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json('server error')
    })
})

router.post('/', (req, res) => {
    Instructors.insert(req.body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('server error')
    })
})

router.delete('/:id', (req, res) => {
    Instructors.remove(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json('server error')
    })
})

module.exports = router