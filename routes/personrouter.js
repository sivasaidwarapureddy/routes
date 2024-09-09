const express = require('express');
const router = express.Router();


router.post('/persons', async (req,res)=>{
    try {
      const data = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save(); 
      res.status(200).json(response);
 
    } catch (error) {
     console.log(err);
     res.status(500).json({error : 'Internal server error'});
    }
       
 })
 router.get('/person', async (req,res)=>{
     try {
       const response = await Person.find();
       console.log(" data fetched ");
       res.status(200).json(response);
  
     } catch (error) {
      console.log( "err : " , {err});
      res.status(500).json({error : 'Internal server error'});
     }     
  })
 
 
  router.get('/person/:workType', async (req,res)=>{
     try {
       const workType = req.params.workType;
       if( workType === 'chef' || workType === 'doctor' || workType === 'teacher' || workType === 'student' ){
             const response = await Person.find({work : workType});
             console.log(" data fetched ");
             res.status(200).json(response);
       }
       else {
         res.status(404).send(" Enter proper Worktype",err);
       }
       
  
     } catch (err) {
      console.log(err);
      res.status(500).json({error : 'Internal server error'});
     }     
  })
 

  module.exports = router;