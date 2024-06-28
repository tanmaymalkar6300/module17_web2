let typeOfPackage="overnight";

switch(typeOfPackage){
    case "standard":
        console.log("Your package will be delivered in next 3-5 days");
        break;
        case "express":
            console.log("Yuor package will be delivered in 1-2 days");
            break;
            case "overnight":
                console.log("Your package will be delivered tomorrow ");
                break;
                default:
                    console.log("Invalid package type!!");

            
}