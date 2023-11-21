import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../assets/menu/menu-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import desertImg from "../../assets/menu/dessert-bg.jpeg"

import useMenu from '../../Hooks/UseMenu';
import SectionTitle from '../../Components/SectionTittle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]=useMenu()

    const dessert =menu.filter(item=> item.category ==='dessert')
    const soup =menu.filter(item=> item.category ==='soup')
    const salad =menu.filter(item=> item.category ==='salad')
    const pizza =menu.filter(item=> item.category ==='pizza')
    const offered =menu.filter(item=> item.category ==='offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Menu</title>
            
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} coverImg={desertImg} title={'dessert'}></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzaImg} title={'pizza'}></MenuCategory>
            <MenuCategory items={salad} coverImg={saladImg} title={'salad'}></MenuCategory>
            <MenuCategory items={soup} coverImg={soupImg} title={'soup'}></MenuCategory>

        </div>
    );
};

export default Menu;