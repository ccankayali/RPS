export const Layout = () => {
    return (
        <div className="dashboard-container">

            <div className="p-5 text-white">
                <div className=" col-3 lg:col-3 xl:col-2 card mb-0 mt-7 border-round-3xl    shopping-card" style={{ background: '#161d21'}} >
                    <div className="flex justify-content-between mb-3 p-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Orders</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-black border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-shopping-cart text-blue-500 text-xl" />
                        </div>
                    </div>
                    <div  style={{ padding: '0 0 2rem 4rem'}}>
                        <span className="font-medium">24 new </span>
                        <span className="text-500 ">since last visit</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}