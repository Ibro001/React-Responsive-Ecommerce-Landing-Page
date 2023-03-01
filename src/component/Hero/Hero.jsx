import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {

  const transition = {duration: 3, type: 'spring'}

  return (
    <div className={css.container}>

      {/**Left side details */}
      <div className={css.h_side}>
        <span className={css.text1}>Skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {""}
            Trendy Collection from monaco, with love from french finest style maker
          </span>
        </div>
      </div>

      {/**Middle Details */}
      <div className={css.wrapper}>
        {/**Blue Circle, framer motion animation */}
        <motion.div 
          initial={{bottom: '2rem'}}
          whileInView={{bottom: '0rem'}}
          transition={transition} 
          className={css.blueCircle}>
        </motion.div>
        {/**HeroImage, framer motion animation */}
        <motion.img 
            transition={transition}
            initial={{bottom: '-2rem'}}
            whileInView={{bottom: '0rem'}}
            src={HeroImg} 
            alt="" 
            width={600}
        />
        {/**Cart framer motion animation */}
        <motion.div 
          transition={transition}
          initial={{right: '4%'}}
          whileInView={{right: '1%'}}
          className={css.cart2}
        >
          <RiShoppingBagFill className={css.ShoppingBagFill}/>
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
        
      {/**Right side details */}
      <div className={css.h_side}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customer}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  )
}

export default Hero