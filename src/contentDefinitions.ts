/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */
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

interface GalleryMedia
{
    type: "gallery";
    composition: "carousel" | "row";
    items: SingleMediaDefinition[];
}

interface VideoMedia
{
    type: "video";
    fileName: string;
    sourceURL: string;
}

interface VideoNoSrcMedia
{
    type: "video-no-src";
    fileName: string;
}

interface YoutubeMedia
{
    type: "youtube";
    videoId: string;
}

type SingleMediaDefinition = GoogleDriveMedia | ImageMedia | ImageWithoutSourceMedia | ImagesMedia | VideoMedia | VideoNoSrcMedia| YoutubeMedia;

export type MediaDefinition = SingleMediaDefinition | GalleryMedia;

export interface Exercise
{
    media?: MediaDefinition;
    taughtBy?: Exercise;
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