const express = require('express');
const router = express.Router();
const invoiceSchema = require('../model/invoiceschema');
const quoteSchema = require('../model/quoteschema');
const paymentSchema = require('../model/paymentschema');


//http://localhost:4500/student/create-invoice
router.post('/create-invoice',(req,res,next)=>{
    invoiceSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/create-quote',(req,res,next)=>{
    quoteSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.post('/create-payment',(req,res,next)=>{
    paymentSchema.create(req.body,(error,data)=>{
        if(error){
            console.log(error.message);
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

//http://localhost:4500/student/
//table display
router.get('/',(req,res,next)=>{
    invoiceSchema.find((error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

router.put('/crm/update-invoice/:id', async (req, res) => {
    const { id } = req.params;
    const updatedInvoiceData = req.body;
  
    try {
      const invoice = { id, ...updatedInvoiceData };
  
      res.status(200).json(invoice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating invoice' });
    }
  });
// router.route('/update-invoice/:id')
// .get((req,res,next)=>{
    
//     invoiceSchema.findById(req.params.id,(error,data)=>{
//         if(error)
//         {
//             console.log(error.message);
//             return next(error);
//         }
//         else{
//             res.json(data);
//         }
//     })
// })
// .put((req,res,next)=>{
//     invoiceSchema.findByIdAndUpdate(
//         req.params.id,
//         {
//         $set: req.body
//         },
//         (error,data)=>{
//         if(error){
//             console.log(error.message)
//             return next(error);
//         }
//         else{
//             res.json(data);
//             console.log(req.body, req.params.id);
//         }
//     })
// })

//delete
router.delete('/delete-invoice/:id',(req,res,next)=>{
    invoiceSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
})

module.exports = router;