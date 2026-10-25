/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
import { SelectExcersises } from "../src/excersises";
import { CreateCategory } from "../src/categories";
import { MainCategory } from "../src/presentation";

export const categories: MainCategory[] = [
    {
        categories: [
            CreateCategory("Stances", "kung-fu/stances", 
                `
                To stretch in a certain stance you add "压腿" to the name of the stance.
                E.g., "马步压腿".
                `
            ),
            CreateCategory("Hand technique", "kung-fu/hand-technique"),
            CreateCategory("Strechting exercises", "kung-fu/stretching-exercises"),
            CreateCategory("Drills", "kung-fu/drills"),
            CreateCategory("Kicks", "kung-fu/kicks"),
            CreateCategory("Punches", "kung-fu/punches"),
            {
                displayText: "Arms technique",
                exercises: SelectExcersises("kung-fu/arms-technique"),
                name: "arms-technique",
            },
            {
                displayText: "Kung-Fu Exercises",
                exercises: SelectExcersises("kung-fu/exercises"),
                name: "kung-fu-excercises",
            },
            CreateCategory("Jumps", "kung-fu/jumps", `
                [Demonstration of different jumps](https://www.instagram.com/p/B-OnNIxIP9V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
                `),
            CreateCategory("Jumpkicks", "kung-fu/jumpkicks"),
            CreateCategory("Acrobatics", "kung-fu/acrobatics"),
            CreateCategory("Floor exercises", "kung-fu/floor-exercises"),
            {
                media: {
                    type: "image-no-src",
                    fileName: "gun.jpg"
                },
                displayText: "Stick technique",
                exercises: SelectExcersises("kung-fu/stick-technique"),
                name: "stick-technique",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "dao.jpg"
                },
                displayText: "Sabre technique",
                exercises: SelectExcersises("kung-fu/sabre-technique"),
                name: "sabre-technique",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "spear.jpg"
                },
                displayText: "Spear technique",
                exercises: SelectExcersises("kung-fu/spear-technique"),
                name: "spear-technique",
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "jian.jpg"
                },
                displayText: "Sword technique",
                exercises: SelectExcersises("kung-fu/sword-technique"),
                name: "sword-technique",
            }
        ],
        displayText: "Basics",
        name: "basics"
    },
    {
        categories: [
            {
                displayText: "Fist forms",
                exercises: SelectExcersises("kung-fu/fist-forms"),
                media: {
                    type: "image",
                    fileName: "quan.png",
                    sourceURL: "https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                },
                name: "fist-forms"
            },
            {
                displayText: "Sabre forms",
                exercises: SelectExcersises("kung-fu/sabre-forms"),
                media: {
                    type: "image-no-src",
                    fileName: "dao.jpg"
                },
                name: "sabre-forms",
            },
            {
                displayText: "Spear forms",
                exercises: SelectExcersises("kung-fu/spear-forms"),
                media: {
                    type: "image-no-src",
                    fileName: "spear.jpg"
                },
                name: "spear-forms"
            },
            {
                media: {
                    type: "image-no-src",
                    fileName: "gun.jpg"
                },
                displayText: "Stick forms",
                exercises: SelectExcersises("kung-fu/stick-forms"),
                name: "stick-forms",
            },
            {
                displayText: "Sword forms",
                exercises: SelectExcersises("kung-fu/sword-forms"),
                media: {
                    type: "image-no-src",
                    fileName: "jian.jpg"
                },
                name: "sword-forms",
            }
        ],
        displayText: "Forms",
        name: "forms"
    },
    {
        categories: [
            CreateCategory("Tai Chi foot technique", "tai-chi/foot-technique"),
            CreateCategory("Tai Chi Moves", "tai-chi/moves"),
            {
                displayText: "Tai Chi Forms",
                exercises: SelectExcersises("tai-chi/fist-forms"),
                name: "tai-chi-forms"
            },
        ],
        displayText: "Tai Chi",
        name: "tai-chi"
    },
    {
        categories: [
            {
                displayText: "Qi Gong forms",
                exercises: SelectExcersises("qi-gong/forms"),
                name: "qi-gong-forms"
            },
            {
                displayText: "Sanda kicks",
                exercises: SelectExcersises("sanda/kicks"),
                name: "sanda-kicks"
            },
            CreateCategory("Chinese vocabulary", "misc/chinese"),
            CreateCategory("Masters", "misc/masters", "This documentation page was written based on the training received from the following masters."),
        ],
        displayText: "Other",
        name: "other"
    }
];