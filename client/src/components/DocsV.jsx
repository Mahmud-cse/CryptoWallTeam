import React from 'react';

const DocsV = () => {
    return (
        <div className='flex flex-col p-3 m-2 cursor-pointer hover:shadow-xl justify-center items-center '>
            <div className='text-white mb-20 text-5xl'>
                <p>Verify DoC</p>
            </div>

            {/* form */}
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="form-group mb-6">
                      <input type="text" class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                        aria-describedby="emailHelp123" placeholder="First name" />
                    </div>
                    <div class="form-group mb-6">
                      <input type="text" class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                        aria-describedby="emailHelp124" placeholder="Last name" />
                    </div>
                  </div>
                  <div class="form-group mb-6">
                    <input type="text" class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                      placeholder="Address" />
                  </div>
                  <div class="form-group mb-6">
                    <input type="password" class="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                      placeholder="ID" />
                  </div>
                </form>

                <div class="flex justify-center mt-8">
                    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                        <div class="m-4">
                            <label class="inline-block mb-2 text-gray-500">File Upload</label>
                            <div class="flex items-center justify-center w-full">
                                <label
                                    class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                    <div class="flex flex-col items-center justify-center pt-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Attach a file</p>
                                    </div>
                                    <input type="file" class="opacity-0" />
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-center p-2">
                            <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Create</button>
                        </div>
                    </div>
                </div> 

              </div>
        </div>
    );
};

export default DocsV;