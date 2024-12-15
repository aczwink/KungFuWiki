/**
 * KungFuWiki
 * Copyright (C) 2024 Amir Czwink (amir130@hotmail.de)
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

import { RenderChinese } from "./chinese";

export const welcomePage = `
<h1>Kung Fu Dokumentation</h1>

<a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/hier-ein-paar-%C3%BCbungen-damit-ihr-euch-zuhause-fit-halten-k%C3%B6nnt/221996235575367/">Tägliche Übungen</a>
<a target="_blank" href="https://www.facebook.com/Shaolin.Kungfu.Institut.eV/videos/meister-li-zeigt-unsere-ba-duan-jin-form-aus-dem-qi-gong-training/795199790878487/">Qi Gong Form</a>
<a target="_blank" href="https://www.instagram.com/p/CBYvCYDptPB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Handtechniken</a>

<ul>
<li>${RenderChinese("爆发力")} bedeutet eine Aktion/Bewegung explosiv und schnell auszuführen</li>
</ul>
`;