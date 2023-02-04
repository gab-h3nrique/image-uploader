
function factoryTime() {
    
    return { 
        
        difference(startParam:string | number, endParam?:string | number) {
        
            const start = new Date(startParam);
            const end = endParam ? new Date(endParam) : null;
        
            const time1 = start.getTime();
            const time2 = end ? end.getTime() : Date.now();
        
            const diff = time2 - time1;
            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        
            return {
                months: Math.floor(diff / (1000 * 60 * 60 * 24 * 30)),
                days: Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
                years: Math.floor(months / 12),
            }
        },
        creationTime(startParam:string | number, endParam?:string | number) {
        
            const start = new Date(startParam);
            const end = endParam ? new Date(endParam) : null;
        
            const time1 = start.getTime();
            const time2 = end ? end.getTime() : Date.now();
        
            const diff = time2 - time1;
        
            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            const years = Math.floor(months / 12);
        
            if(years > 0) return `há ${years} ano${years > 1 ? "s" : ""}`;
            if(years == 0 && months > 0) return `há ${months} mese${months > 1 ? "s" : ""}`;
            if(months == 0 && days > 0) return `há ${days} dia${days > 1 ? "s" : ""}`;
            if(days == 0 && hours > 0) return `há ${hours} hora${hours > 1 ? "s" : ""}`;
            if(hours == 0 && minutes > 0) return `há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
            if(minutes == 0) return `há ${seconds} segundos`;
        
            return 'não estimado';
        
        }

    }
}

const Time = factoryTime()

export default Time