export type Category='Electronics'|'Kitchen & Dining'|'Groceries'|'Fashion'|'Home & Living'|'Beauty & Care'|'Phones & Gadgets'|'Baby & Kids'|(string & {});
export type Product={id:string;slug:string;name:string;category:Category;price:number;oldPrice?:number;rating:number;reviews:number;stock:number;image:string;badge?:string;description:string;brand:string;colors?:string[];featured?:boolean};
export type Order={id:string;customer:string;email:string;date:string;total:number;status:'Delivered'|'Processing'|'Shipped'|'Cancelled'|'Pending';items:number};
export const money=(n:number)=>'₦'+Math.round(n).toLocaleString('en-NG');
export const categories:{name:Category;image:string;icon:string}[]=[
{name:'Electronics',image:'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700&q=85',icon:'Monitor'},
{name:'Kitchen & Dining',image:'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700&q=85',icon:'CookingPot'},
{name:'Groceries',image:'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=85',icon:'ShoppingBasket'},
{name:'Fashion',image:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85',icon:'Shirt'},
{name:'Home & Living',image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=85',icon:'House'},
{name:'Beauty & Care',image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=85',icon:'Sparkles'},
{name:'Phones & Gadgets',image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&q=85',icon:'Smartphone'},
{name:'Baby & Kids',image:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=700&q=85',icon:'Baby'}];
const photos={headphones:'photo-1505740420928-5e560c06d30e',speaker:'photo-1608043152269-423dbba4e7e1',laptop:'photo-1496181133206-80ce9b88a853',camera:'photo-1516035069371-29a1b244cc32',watch:'photo-1523275335684-37898b6baf30',phone:'photo-1511707171634-5f897ff02aa9',tv:'photo-1593359677879-a4bb92f829d1',tablet:'photo-1544244015-0df4b3ffc6b0',blender:'photo-1570222094114-d054a817e56b',coffee:'photo-1517256673644-36ad11246d21',pan:'photo-1556911220-bff31c812dba',plate:'photo-1604908176997-125f25cc6f3d',groceries:'photo-1542838132-92c53300491e',fruits:'photo-1619566636858-adf3ef46400b',rice:'photo-1586201375761-83865001e31c',oil:'photo-1474979266404-7eaacbcd87c5',dress:'photo-1539008835657-9e8e9680c956',sneakers:'photo-1542291026-7eec264c27ff',bag:'photo-1547949003-9792a18a2601',shirt:'photo-1598032895397-b9472444bf93',sofa:'photo-1555041469-a586c61ea9bc',lamp:'photo-1507473885765-e6ed057f782c',chair:'photo-1503602642458-232111445657',decor:'photo-1600210492486-724fe5c67fb0',skincare:'photo-1556228578-0d85b1a4d571',perfume:'photo-1541643600914-78b084683601',makeup:'photo-1596462502278-27bfdc403348',baby:'photo-1515488042361-ee00e0ddd4e4',toy:'photo-1558060370-d644479cb6f7'};
const make=(id:string,name:string,category:Category,price:number,img:keyof typeof photos,extra:Partial<Product>={}):Product=>({id,slug:name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,''),name,category,price,image:`https://images.unsplash.com/${photos[img]}?w=900&q=85&fit=crop`,rating:4.5,reviews:78,stock:25,brand:'Chariot Select',description:`Discover exceptional everyday quality with the ${name}. Carefully selected for performance, style and great value. Enjoy a dependable shopping experience with Chariot Marketplace.`,...extra});
export const initialProducts:Product[]=[
make('p01','Wireless Studio Headphones','Electronics',42500,'headphones',{oldPrice:55000,rating:4.9,reviews:248,badge:'Bestseller',featured:true,colors:['Black','Cream']}),
make('p02','Premium Bluetooth Speaker','Electronics',36500,'speaker',{oldPrice:44000,rating:4.8,reviews:136,badge:'Hot deal',featured:true}),
make('p03','Ultra-Slim Laptop 14-inch','Electronics',585000,'laptop',{oldPrice:640000,rating:4.7,reviews:89,featured:true}),
make('p04','Classic Stainless Steel Watch','Fashion',28500,'watch',{oldPrice:35000,rating:4.9,reviews:301,featured:true,colors:['Silver','Gold','Black']}),
make('p05','Everyday Smartphone 128GB','Phones & Gadgets',235000,'phone',{oldPrice:270000,rating:4.8,reviews:187,badge:'New arrival',featured:true,colors:['Midnight','Blue']}),
make('p06','55-inch Smart LED Television','Electronics',469000,'tv',{rating:4.6,reviews:64,stock:7}),
make('p07','Portable Tablet 10-inch','Phones & Gadgets',172000,'tablet',{oldPrice:198000,stock:12}),
make('p08','Compact Digital Camera','Electronics',195000,'camera',{stock:9}),
make('p09','Multi-Speed Kitchen Blender','Kitchen & Dining',49500,'blender',{oldPrice:62000,rating:4.8,reviews:153,featured:true}),
make('p10','Ceramic Coffee Mug Set','Kitchen & Dining',14500,'coffee',{oldPrice:18500}),
make('p11','Non-Stick Cooking Pan Set','Kitchen & Dining',38500,'pan',{oldPrice:45000,stock:6,badge:'Low stock'}),
make('p12','Minimalist Dinnerware Collection','Kitchen & Dining',32500,'plate',{featured:true}),
make('p13','Fresh Market Grocery Basket','Groceries',18500,'groceries',{stock:38}),
make('p14','Seasonal Fresh Fruit Box','Groceries',12500,'fruits',{oldPrice:15000}),
make('p15','Premium Long Grain Rice 5kg','Groceries',18500,'rice',{rating:4.9,reviews:245}),
make('p16','Pure Cooking Oil 2L','Groceries',8500,'oil',{stock:42}),
make('p17','Elegant Midi Occasion Dress','Fashion',39500,'dress',{oldPrice:52000,badge:'Trending',featured:true,colors:['Black','Blush','Navy']}),
make('p18','Everyday Lifestyle Sneakers','Fashion',45500,'sneakers',{oldPrice:59000,featured:true,colors:['Red','White','Black']}),
make('p19','Structured Everyday Tote Bag','Fashion',33500,'bag',{oldPrice:42000}),
make('p20','Classic Cotton Everyday Shirt','Fashion',19500,'shirt',{colors:['White','Blue','Black']}),
make('p21','Contemporary 3-Seater Sofa','Home & Living',345000,'sofa',{oldPrice:410000,stock:4,featured:true}),
make('p22','Modern Bedside Table Lamp','Home & Living',29500,'lamp',{oldPrice:36000}),
make('p23','Scandinavian Accent Chair','Home & Living',89500,'chair',{stock:8}),
make('p24','Home Styling Decor Essentials','Home & Living',25500,'decor'),
make('p25','Daily Hydration Skincare Set','Beauty & Care',27500,'skincare',{oldPrice:34000,featured:true}),
make('p26','Signature Eau de Parfum','Beauty & Care',48500,'perfume',{oldPrice:62000}),
make('p27','Complete Beauty Makeup Kit','Beauty & Care',31500,'makeup'),
make('p28','Newborn Care Gift Bundle','Baby & Kids',35500,'baby',{oldPrice:44000}),
make('p29','Creative Learning Toy Set','Baby & Kids',22500,'toy',{rating:4.8,reviews:120}),
make('p30','Wireless Smart Wristwatch','Phones & Gadgets',58500,'watch',{oldPrice:72000,featured:true})];
export const seedOrders:Order[]=[{id:'CH-10482',customer:'Amara Okafor',email:'amara@example.com',date:'2026-10-14',total:89500,status:'Processing',items:3},{id:'CH-10481',customer:'Tunde Adebayo',email:'tunde@example.com',date:'2026-10-14',total:235000,status:'Shipped',items:1},{id:'CH-10480',customer:'Zainab Musa',email:'zainab@example.com',date:'2026-10-13',total:47500,status:'Delivered',items:2},{id:'CH-10479',customer:'Chika Nwosu',email:'chika@example.com',date:'2026-10-13',total:154000,status:'Pending',items:4},{id:'CH-10478',customer:'David Bello',email:'david@example.com',date:'2026-10-12',total:585000,status:'Delivered',items:1},{id:'CH-10477',customer:'Bola Akin',email:'bola@example.com',date:'2026-10-11',total:32000,status:'Cancelled',items:2}];
export const siteLinks=[['About Us','/about'],['Contact Us','/contact'],['FAQs','/faq'],['Shipping & Delivery','/shipping'],['Returns & Refunds','/returns'],['Privacy Policy','/privacy'],['Terms & Conditions','/terms']];
