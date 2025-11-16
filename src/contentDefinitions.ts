/**
 * KungFuWiki
 * Copyright (C) 2024-2025 Amir Czwink (amir130@hotmail.de)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * */
interface GoogleDriveMedia
{
    type: "gdrive";
    url: string;
}

interface ImageMedia
{
    type: "image";
    fileName: string;
    sourceURL: string;
}

interface ImageWithoutSourceMedia
{
    type: "image-no-src";
    fileName: string;
}

interface ImagesMedia
{
    type: "images";
    fileNames: string[];
    sourceURL: string;
}

interface VideoMedia
{
    type: "video";
    fileName: string;
    sourceURL: string;
}

interface YoutubeMedia
{
    type: "youtube";
    videoId: string;
}

export type MediaDefinition = GoogleDriveMedia | ImageMedia | ImageWithoutSourceMedia | ImagesMedia | VideoMedia | YoutubeMedia;

export interface Exercise
{
    media?: MediaDefinition;
    titleLang: "chinese" | "german";
    title: string;
    text: string | (() => string);
}

export interface ExerciseCategory
{
    description?: string;
    displayText: string;
    exercises: Exercise[];
    media?: MediaDefinition;
    name: string;
}

export interface MainCategory
{
    displayText: string;
    categories: ExerciseCategory[];
    name: string;
}