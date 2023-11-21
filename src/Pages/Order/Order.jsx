
import orderCover from '../../assets/shop/order.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import FoodCard from '../../Components/FoodCard/FoodCard';
import { useState } from 'react';
import useMenu from '../../Hooks/UseMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories =['salad','pizza','soup','dessert','drinks']
    const {category} =useParams()
    const initialIndex =categories.indexOf(category)
    const [menu]=useMenu()
  
    const [tabIndex,setTabIndex]=useState(initialIndex)


    const dessert =menu.filter(item=> item.category ==='dessert')
    const soup =menu.filter(item=> item.category ==='soup')
    const salad =menu.filter(item=> item.category ==='salad')
    const pizza =menu.filter(item=> item.category ==='pizza')
    const drinks =menu.filter(item=> item.category ==='drinks')

    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order Food</title>
            
            </Helmet>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                  <div className=' grid md:grid-cols-3 gap-10'>
                  {salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=' grid md:grid-cols-3 gap-10'>
                  {pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=' grid md:grid-cols-3 gap-10'>
                  {soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=' grid md:grid-cols-3 gap-10'>
                  {dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className=' grid md:grid-cols-3 gap-10'>
                  {drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
                  </div>
                </TabPanel>
                
            </Tabs>
           
        </div>
    );
};

export default Order;