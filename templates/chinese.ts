/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

export function RenderChineseOrdinalNumber(n: number)
{
    function MapNumber(n: number)
    {
        switch(n)
        {
            case 2:
                return "二";
            case 3:
                return "三";
            case 4:
                return "四";
            case 6:
                return "六";
            case 7:
                return "七";
            case 8:
                return "八";
            default:
                throw new Error("NOT IMPLEMENTED: " + n);
        }
    }

    if(n < 10)
        return MapNumber(n);
    else if(n < 20)
        return "十" + MapNumber(n % 10);
    else if(n < 100)
        return MapNumber(Math.floor(n / 10)) + "十" + MapNumber(n % 10);

    throw new Error("NOT IMPLEMENTED: " + n);
}