import React from 'react'
import { useState } from 'react'
import EditBioComp from './EditBioComp'

import { FiEdit } from 'react-icons/fi'
function BioComp() {
    const [isBioOpen,setIsBioOpen] = useState(false)
    const personalInfo = {
        bio:"Tetx vhjuvnjgj vnjgvjnfjfj "
    }

  return (
    <>
    <div className="flex justify-between">
    <h3 className="text-md font-medium">Bio</h3>
    <button className="text-gray-500"
    onClick={()=>{setIsBioOpen(true)}}>
      <FiEdit />
    </button>
  </div>
  <p className="mt-2 text-gray-700">
   {personalInfo.bio}
  </p>
  {isBioOpen && (
    <EditBioComp {...{personalInfo,setIsBioOpen}}/>
  )}
  </>
  )
}

export default BioComp
