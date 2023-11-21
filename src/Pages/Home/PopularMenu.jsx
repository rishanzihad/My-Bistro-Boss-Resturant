
import SectionTitle from "../../Components/SectionTittle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/UseMenu";



const PopularMenu = () => {
    const [menu]=useMenu()
   const popular =menu.filter(item=> item.category ==='popular')
    return (
        <section className="mb-12">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular items"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=><MenuItem key={item.id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
