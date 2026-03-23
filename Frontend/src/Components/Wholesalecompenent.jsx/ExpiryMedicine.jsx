import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DangerousIcon from '@mui/icons-material/Dangerous';
const ExpiryMedicine = () => {
    return (
        <div className='bg-gray-50 font-display text-slate-900'>
            {/* <!-- Main Content --> */}
            <main className=' min-h-screen'>
                {/* <!-- Dashboard Header: Title and Primary Action --> */}
                <div className="p-5 max-w-1600px mx-auto space-y-8">
                    {/* <!-- Page Header --> */}
                    <div className="flex justify-between items-end pt-5">
                        <div>
                            <h2 className="text-4xl font-extrabold font-headline tracking-tight text-blue-600">Expiry Manager</h2>
                            <p className="text-slate-600 mt-1">Real-time tracking of shelf-life and stock depletion risks.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-800 font-semibold rounded-full border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm">
                                <FileUploadIcon className='text-slate-600' />
                                Export Data
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-800 text-white font-semibold rounded-full  shadow-sm">
                                <PictureAsPdfIcon className='text-white' />
                                Download PDF
                            </button>
                        </div>
                    </div>
                     {/* <!-- Top Summary Cards --> */}
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                      {/* <!-- Card 1: Expired --> */}
                                      <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200'>
                                         <div className="flex">
                                            <div className='bg-red-300 p-4 rounded-lg '>
                                                  <DangerousIcon className='text-red-700 text-3xl' />
                                            </div>
                                         </div>
                                      </div>
                                 </div>
                </div>
            </main>

        </div>
    )
}

export default ExpiryMedicine
