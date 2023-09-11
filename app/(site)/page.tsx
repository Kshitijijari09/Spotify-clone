import ListItem from "@/Components/ListItem"
import Header from "@/Components/Header"
export default function Home() {
  return (
   <div className = "bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
    <Header>
      <div>
          <h1 className = "text-white test-3xl font-semibold">
            Welcome Back 
          </h1>
          <div className = "grid grid-col-1 sm:grid-col-2 xl:grid-col-3 2xl:grid-col-4 gap-3 mt-4">
            <ListItem image = "/images/liked.png" name = "Liked Songs" href= "liked"/>
          </div>
        </div>
    </Header>
    <div className="mt-2 mb-7 px-6">
      <div className="flex justify-between items-center">
          <h1 className= "text-white text-2xl font-semibold">
            Newest Songs
          </h1>
      </div>
       <div>
        List of Songs!
       </div>
    </div>
    </div>
  )
}
