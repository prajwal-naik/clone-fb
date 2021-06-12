import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Elong Mast",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Behoes",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Bill Hates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
];

function Stories(){
    return( 
        <div className = "flex justify-center space-x-3 mx-auto">
            <h1> TEST </h1>
            {stories.map((story) => {
                <StoryCard  
                    key = {story.src} 
                    name = {story.name} 
                    src = {story.src}
                    profile = {story.profile}
                />
            })}
        </div>
    );
}

export default Stories;