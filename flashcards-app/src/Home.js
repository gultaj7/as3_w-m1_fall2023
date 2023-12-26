const Home = () => {

    const handleClick = () => {
        console.log('hello');
    }
    
    return (
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>clcik me</button>
        </div>
    );
}
 
export default Home;