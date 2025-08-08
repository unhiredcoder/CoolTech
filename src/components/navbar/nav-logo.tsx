import { APP_NAME } from "@/lib/constants";
import { Snowflake } from "lucide-react";

export function Navlogo() {
    return (
        <>
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-background" />
                </div>
                <span className="text-xl font-bold">{APP_NAME}</span>
            </div>
        </>
    );
}