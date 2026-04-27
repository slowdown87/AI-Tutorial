import os
import re

# 目录设置
chapters_dir = 'src/data/chapters'

# 正则表达式匹配本地图片路径
local_image_pattern = r'!\[(.*?)\]\((/images/.*?)\)'

# 原始API链接映射
image_mappings = {
    'chapter1_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20illustration%20of%20artificial%20intelligence%20concept%2C%20showing%20a%20computer%20with%20human%20like%20brain%2C%20colorful%2C%20educational%2C%20cartoon%20style&image_size=landscape_16_9',
    'chapter1_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20Turing%20test%2C%20showing%20a%20human%20talking%20to%20both%20a%20computer%20and%20another%20human%20behind%20curtains%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20deep%20learning%20neural%20network%2C%20showing%20layers%20of%20neurons%20processing%20information%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20data%20explosion%2C%20showing%20big%20data%20cloud%20with%20various%20data%20sources%2C%20colorful%2C%20modern%20style&image_size=landscape_16_9',
    'chapter1_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20as%20a%20tool%20and%20assistant%2C%20with%20human%20working%20alongside%20AI%2C%20educational%2C%20friendly%20style&image_size=landscape_16_9',
    'chapter1_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20a%20tool%20for%20various%20tasks%20like%20writing%2C%20analyzing%2C%20creating%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20limitations%2C%20with%20examples%20of%20areas%20where%20AI%20struggles%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20capability%20boundaries%2C%20with%20what%20AI%20can%20and%20cannot%20do%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20various%20AI%20applications%20in%20different%20fields%2C%20colorful%20educational%20style&image_size=landscape_16_9',
    'chapter1_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20a%20writing%20assistant%2C%20helping%20with%20email%2C%20report%2C%20article%20writing%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img11.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20an%20office%20assistant%2C%20helping%20with%20scheduling%2C%20document%20processing%2C%20data%20analysis%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img12.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20a%20daily%20life%20assistant%2C%20helping%20with%20travel%20planning%2C%20recipe%20recommendation%2C%20shopping%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img13.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20types%20of%20AI%20tools%20and%20their%20categories%2C%20colorful%20educational%20style&image_size=landscape_16_9',
    'chapter1_img14.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20large%20language%20model%20AI%20helping%20with%20writing%2C%20coding%2C%20and%20answering%20questions%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img15.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20voice%20AI%20tools%20for%20speech%20recognition%20and%20text-to-speech%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img16.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20code%20tools%20helping%20with%20programming%2C%20coding%2C%20and%20debugging%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img17.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20safe%20AI%20usage%20principles%2C%20with%20shield%20and%20security%20icons%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img18.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20privacy%20protection%20when%20using%20AI%2C%20with%20person%20protecting%20personal%20data%2C%20educational%20style&image_size=landscape_16_9',
    'chapter1_img19.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20responsible%20AI%20usage%2C%20with%20person%20using%20AI%20ethically%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20large%20language%20model%20with%20chat%20interface%20and%20AI%20brain%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20LLM%20working%20principle%20with%20input%20processing%2C%20attention%20mechanism%2C%20and%20output%20generation%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20tasks%20LLM%20can%20do%2C%20like%20writing%2C%20coding%2C%20translating%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20LLM%20logos%20and%20characters%2C%20like%20ChatGPT%2C%20Claude%2C%20Gemini%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20decision%20tree%20for%20choosing%20LLM%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20to%20register%20and%20use%20LLM%2C%20like%20signup%2C%20login%2C%20chat%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20comparing%20registration%20methods%20of%20different%20LLMs%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20LLM%20interface%20with%20chat%20window%2C%20history%20sidebar%2C%20settings%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20LLM%20functions%20like%20writing%2C%20question%20answering%2C%20summarizing%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20before%20and%20after%20content%20improvement%20with%20LLM%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img11.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20mind%20map%20created%20by%20LLM%2C%20showing%20branches%20and%20ideas%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img12.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20to%20write%20article%20with%20LLM%2C%20from%20outline%20to%20final%20draft%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img13.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20article%20writing%20process%3A%20outline%20draft%20revise%20final%2C%20educational%20style&image_size=landscape_16_9',
    'chapter2_img14.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20with%20writing%20tips%20for%20using%20LLM%2C%20friendly%20and%20educational%20style&image_size=landscape_16_9',
    'chapter3_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20writing%20process%20with%20brain%20storming%2C%20drafting%2C%20and%20editing%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20engineering%20structure%20with%20instruction%2C%20context%2C%20constraints%2C%20and%20examples%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20email%20writing%20with%20AI%20assistance%2C%20showing%20professional%20email%20interface%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20types%20of%20emails%20like%20business%2C%20thank%20you%2C%20follow%20up%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20report%20writing%20with%20AI%20assistance%2C%20showing%20professional%20report%20document%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20data%20analysis%20in%20report%20with%20charts%20and%20insights%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20creative%20writing%20with%20AI%20assistance%2C%20showing%20writer%20and%20AI%20brainstorming%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20creative%20writing%20process%20from%20idea%20to%20final%20draft%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20content%20editing%20and%20polishing%20with%20AI%20assistance%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20content%20rewriting%20process%20from%20analysis%20to%20final%20revision%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img11.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20complete%20content%20creation%20process%20with%20AI%20assistance%2C%20educational%20style&image_size=landscape_16_9',
    'chapter3_img12.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20content%20optimization%20process%20from%20draft%20to%20final%20version%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20image%20generation%20AI%20process%2C%20showing%20text%20input%20being%20converted%20to%20image%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20diffusion%20model%20process%20from%20noise%20to%20clear%20image%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20applications%20of%20image%20generation%20AI%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20image%20generation%20tools%20logos%20and%20interfaces%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20decision%20tree%20for%20choosing%20image%20generation%20tool%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20engineering%20for%20image%20generation%2C%20with%20text%20input%20and%20image%20output%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20example%20of%20good%20prompt%20vs%20bad%20prompt%20for%20image%20generation%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20to%20create%20AI%20image%2C%20from%20prompt%20to%20final%20image%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20advanced%20image%20generation%20techniques%2C%20with%20professional%20tools%20and%20workflow%2C%20educational%20style&image_size=landscape_16_9',
    'chapter4_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20art%20styles%20and%20visual%20effects%20in%20AI%20image%20generation%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20office%20automation%20with%20AI%20tools%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20and%20RPA%20working%20together%20for%20office%20automation%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20document%20processing%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20analyzing%20documents%20and%20extracting%20information%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20meeting%20assistant%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20taking%20meeting%20notes%20and%20extracting%20action%20items%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20data%20analysis%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20analyzing%20data%20and%20generating%20insights%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20workflow%20optimization%20process%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter5_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20before%20and%20after%20workflow%20optimization%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20learning%20principles%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personalized%20learning%20with%20AI%20assistance%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20knowledge%20acquisition%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20intelligent%20knowledge%20retrieval%20and%20organization%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20concept%20understanding%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20methods%20for%20concept%20understanding%20like%20visualization%20and%20decomposition%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20research%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisting%20research%20process%20from%20literature%20review%20to%20paper%20writing%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personalized%20learning%20plan%20design%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter6_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20execution%20of%20personalized%20learning%20plan%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20engineering%20principles%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20structure%20with%20instruction%2C%20context%2C%20input%2C%20and%20output%20format%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20basic%20prompt%20structure%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20prompt%20structures%20for%20various%20tasks%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20advanced%20prompt%20techniques%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20application%20of%20advanced%20prompt%20techniques%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20domain-specific%20prompt%20strategies%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20application%20of%20domain-specific%20prompts%20in%20different%20fields%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20template%20creation%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter7_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20template%20usage%20process%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20integration%20of%20different%20AI%20tools%20working%20together%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20benefits%20of%20AI%20tool%20integration%20like%20efficiency%20and%20creativity%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20for%20AI%20tool%20integration%20from%20goal%20setting%20to%20execution%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20advanced%20prompt%20engineering%20with%20AI%20tools%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20structure%20with%20instruction%2C%20context%2C%20constraints%2C%20and%20examples%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20optimization%20process%20with%20iterative%20improvement%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20applications%20in%20various%20professional%20fields%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20in%20education%20with%20personalized%20learning%20and%20intelligent%20tutoring%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20in%20marketing%20with%20personalized%20content%20and%20customer%20analysis%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personal%20AI%20workflow%20with%20different%20tools%20connected%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img11.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20workflow%20design%20principles%20like%20goal%20setting%2C%20tool%20selection%2C%20and%20efficiency%20optimization%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img12.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20workflow%20implementation%20steps%20from%20needs%20analysis%20to%20continuous%20improvement%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img13.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20future%20AI%20trends%20and%20developments%2C%20futuristic%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img14.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20multimodal%20AI%20processing%20text%2C%20images%2C%20audio%2C%20and%20video%2C%20educational%20style&image_size=landscape_16_9',
    'chapter8_img15.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20explainable%20AI%20with%20decision%20process%20visualization%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img1.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20impact%20on%20job%20market%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img2.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20job%20market%20impact%20with%20both%20challenges%20and%20opportunities%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img3.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20core%20competencies%20for%20AI%20era%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img4.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20critical%20thinking%20process%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img5.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personal%20branding%20and%20professional%20networking%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img6.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20for%20personal%20branding%20from%20positioning%20to%20maintenance%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img7.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20entrepreneurship%20and%20innovation%20opportunities%20in%20AI%20era%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img8.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20AI%20startup%20opportunities%20in%20various%20industries%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img9.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20lifelong%20learning%20and%20continuous%20growth%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9',
    'chapter9_img10.png': 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20habits%20for%20lifelong%20learning%20like%20mindset%2C%20strategies%2C%20and%20resources%2C%20educational%20style&image_size=landscape_16_9'
}

# 处理每个章节文件
for chapter_file in os.listdir(chapters_dir):
    if chapter_file.endswith('.ts'):
        file_path = os.path.join(chapters_dir, chapter_file)
        print(f'处理文件: {file_path}')
        
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找所有本地图片路径并替换为原始API链接
        def replace_image_link(match):
            alt_text = match.group(1)
            local_path = match.group(2)
            # 提取文件名
            filename = os.path.basename(local_path)
            # 查找对应的API链接
            if filename in image_mappings:
                return f"![{alt_text}]({image_mappings[filename]})"
            else:
                return match.group(0)
        
        content = re.sub(local_image_pattern, replace_image_link, content)
        
        # 写回更新后的内容
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'文件更新完成: {file_path}')
        print('-' * 50)

print('所有图片链接恢复完成!')
