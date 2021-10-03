//front-end
import SidebarIcons from './sidebar-icons/SidebarIcons'
import SidebarList from './sidebar-list/SidebarList'
//back-end

function Sidebar () {
  return (
    <div
      className='
        flex-1
        lg:max-w-[420px]
        lg:min-w-[210px]
        flex 
        h-screen 
        bg-gray-900 
        overflow-hidden'
    >
      <SidebarIcons />
      <SidebarList />
    </div>
  )
}

export default Sidebar
