import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center p-4">
      <h1 className="text-center text-2xl font-bold mt-4 mb-8 lg:text-4xl">
        {" "}
        Welcome to Rifah's Exhibition
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-none">
          <Card
            title="Beautiful Sunset"
            image="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRCCmoea4cozesPkjXuFdOi7uT9qmavnWUnUZ8kqREklhYtJcn7-mCnJwX7BZuS5UP6"
            description="A beautiful sunset over the mountains."
          />
        </div>
        <div className="transition duration-300 ease-in-out hover:scale-110">
          <Card
            title="Forest Walk"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkej3dLtTKTdmjm2O2mpUQ_lLdWS9JADpOWg&s"
            description="A serene walk through a lush forest."
          />
        </div>
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-none">
          <Card
            title="City Lights"
            image="https://images.theconversation.com/files/149162/original/image-20161208-18046-116xg09.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
            description="The city comes alive with lights at night."
          />
        </div>
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-zoom-out">
          <Card
            title="Flowing Fountain"
            image="https://tse4.mm.bing.net/th?id=OIP.ZHEaEn6yqgb76ySxdb3S6gHaE-&pid=Api&P=0&h=220"
            description="A eye-soothing view over the fountain."
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-none">
          <Card
            title="Amazing Autumn"
            image="https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=220"
            description="A sunny day at Autumn."
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110">
          <Card
            title="Sunset"
            image="https://tse4.mm.bing.net/th?id=OIP.a2N_JiZUv29n4bzoK0gutwHaEK&pid=Api&P=0&h=220"
            description="The view from mountain at Sunset."
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-none">
          <Card
            title="The Winter Morning"
            image="https://tse2.mm.bing.net/th?id=OIP.Wzuc1XrC-iEHJVdXWUjY8AHaEK&pid=Api&P=0&h=220"
            description="A sunny day at Winter."
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110">
          <Card
            title="The Cheery Blossom "
            image="https://tse1.mm.bing.net/th?id=OIP.5J_PPGZVssnUw7UIcqFrfAHaEo&pid=Api&P=0&h=220"
            description="A beautiful day in Spring"
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-none">
          <Card
            title="Starry Night"
            image="https://tse3.mm.bing.net/th?id=OIP.T047RCxsRWjcT11wYpPQzwHaEo&pid=Api&P=0&h=220"
            description="The night with colorful and starry sky."
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110">
          <Card
            title="Yellow Leaves"
            image="https://wallpaperset.com/w/full/b/f/f/425187.jpg"
            description="A soothing view of the tree leaves."
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-none">
          <Card
            title="The Rainy Weather"
            image="https://wallpapercave.com/wp/wc1729391.jpg"
            description="A beautiful day in rain"
          />
        </div>{" "}
        <div className="transition duration-300 ease-in-out hover:scale-110 cursor-none">
          <Card
            title="The Red Umbrella"
            image="https://tse4.mm.bing.net/th?id=OIP.JW7tFR7fKqNuIbu3ArckaAHaEK&pid=Api&P=0&h=220"
            description="A beautiful scenary with an umbrella."
          />
        </div>
      </div>
    </div>
  );
}

export default App;