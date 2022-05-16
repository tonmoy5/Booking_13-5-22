import express from 'express';
import { creteHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();


//CREAKTE
router.post("/", verifyAdmin, creteHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/:id", getHotel)

//GET ALL
router.get("/", getAllHotel)

export default router;