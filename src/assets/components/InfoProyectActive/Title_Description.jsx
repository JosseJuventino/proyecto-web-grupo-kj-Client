import TagProject from "../InscriptionProject/TagProject";
function Title_Description({titulo, description, hasTag, tags}) {
    return(
    <div>
      
        <h1 className="flex flex-row flex-wrap font-primary font-bold mt-4 text-3xl lg:p-2 lg:mt-0 lg:text-4xl">{titulo}</h1>
        {
            hasTag ? (
                <div className="flex flex-row flex-wrap">
                    {tags.map((tag, index) => (
                        <TagProject key={index} name={tag.name} background={tag.colorTag} />
                    ))}
                </div>
            ) : (
                <></>
            )
        }
        <p className="font-primary text-lg py-2 lg:p-2">{description}</p>
    </div>
    )
}

export default Title_Description;