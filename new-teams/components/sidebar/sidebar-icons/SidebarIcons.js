//front-end
import UserIcons from './UserIcons'
import { PlusIcon } from '@heroicons/react/outline'
//back-end

function SidebarIcons () {
  return (
    <div
      className='
        bg-black 
        h-screen 
        max-w-[190px] 
        min-w-[100px]
        overflow-hidden
        '
    >
      <div
        className='
        grid
        justify-center
        py-5 
        bg-black 
        top-0 
        z-50 
        sticky
        border-b-4
        border-gray-700
        '
      >
        <PlusIcon
          className='
            border-2 
            h-8
            border-green-500 
            rounded-2xl 
            text-green-400 
            active:text-green-200 '
        />
      </div>
      <div className='justify-center grid h-screen overflow-y-scroll scrollbar-hide'>
        <UserIcons img='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo' />
        <UserIcons img='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo' />
        <UserIcons img='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo' />
        <UserIcons img='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo' />
        <UserIcons img='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo' />
        <UserIcons img='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo' />
        <UserIcons img='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo' />
      </div>
    </div>
  )
}

export default SidebarIcons
