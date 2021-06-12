import StoryCard from "./StoryCard";

const stories = [
    // {
    //     name: "Tom Crawl",
    //     src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.mubicdn.net%2Fimages%2Fcast_member%2F2184%2Fcache-2992-1547409411%2Fimage-w856.jpg%3Fsize%3D800x&imgrefurl=https%3A%2F%2Fmubi.com%2Fcast%2Ftom-cruise&tbnid=t4Q5kWZM6vsDoM&vet=12ahUKEwijkdzSjZLxAhUtgmMGHYW2BDQQMygHegUIARDdAQ..i&docid=_b_BPjImKBAntM&w=800&h=950&q=tom%20cruise&ved=2ahUKEwijkdzSjZLxAhUtgmMGHYW2BDQQMygHegUIARDdAQ",
    //     profile: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.mubicdn.net%2Fimages%2Fcast_member%2F2184%2Fcache-2992-1547409411%2Fimage-w856.jpg%3Fsize%3D800x&imgrefurl=https%3A%2F%2Fmubi.com%2Fcast%2Ftom-cruise&tbnid=t4Q5kWZM6vsDoM&vet=12ahUKEwijkdzSjZLxAhUtgmMGHYW2BDQQMygHegUIARDdAQ..i&docid=_b_BPjImKBAntM&w=800&h=950&q=tom%20cruise&ved=2ahUKEwijkdzSjZLxAhUtgmMGHYW2BDQQMygHegUIARDdAQ"
        
    // },
    {
        no : "1",
        name: "Jeff Behoes",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {   no : "2",
        name : "Praji Naik",
        src : "https://links.papareact.com/l4v",
        profile : "https://links.papareact.com/l4v",
    },
    {
        no : "3",
        name: "Elong Mast",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        no : "4",
        name: "Jeff Behoes",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        no : "5",
        name: "Bill Hates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
];

function Stories(){
    return( 
        <div className = "flex justify-center space-x-3 mx-auto">
            {stories.map((story) => {
                return(
                    <StoryCard  
                        key = {story.no} 
                        name = {story.name} 
                        src = {story.src}
                        profile = {story.profile}
                    />
                );
            })}
        </div>
    );
}

export default Stories;