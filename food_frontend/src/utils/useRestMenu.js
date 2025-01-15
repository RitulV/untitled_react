// custom hook implementation for modularity/single responsibility principle
import { useEffect, useState } from "react";
import { MENU_CARD } from "./constants";

const useRestMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])
    
    async function fetchData(){
        const response = await fetch(MENU_CARD + resId)
        const json = await response.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestMenu;