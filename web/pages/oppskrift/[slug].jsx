import client from "../../client"

const RecipePage = (props) => {
    const {recipe} = props

    return (
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )
}

RecipePage.getInitialProps = async (context) => {
    const { slug = ''} = context.query
    return {recipe: await client.fetch(
        `*[_type == 'recipe' && slug.current == $slug][0]`,{slug}
    )}

}

export default RecipePage