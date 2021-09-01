import client from "../client";
import {Recipe} from '../components/Recipe'

const HomePage = (props) => {
  const {recipes} = props
  console.log(props)

  return (
    <div className="home">
      <h1>Hei Bestefar :)</h1>
      <div className="recipe-list">
        {recipes.map(recipe => 
          <Recipe key={recipe._id} recipe={recipe}/>
          )}
      </div>
    </div>
  )
}

HomePage.getInitialProps = async () => {
    return {recipes: await client.fetch(`*[_type == 'recipe']`)}
}

export default HomePage;