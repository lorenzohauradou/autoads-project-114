'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Zap, Eye, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="KAPVOE Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">KAPVOE</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors">
                                Elite Series
                            </span>
                            <span className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors">
                                Technology
                            </span>
                            <span className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors">
                                Athletes
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex text-zinc-400 hover:text-white">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex text-zinc-400 hover:text-white">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Product Section */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-black to-zinc-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/f3f9336f-71af-4264-843a-eccdb284790b.jpg?"
                                    alt="KAPVOE Elite Performance Sunglasses - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 hover:scale-105 transition-all duration-200 border border-zinc-800">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/fd548de6-5a7d-4694-a578-8f9f9c0543b0.jpg?"
                                        alt="KAPVOE Elite Performance Sunglasses - Alternate View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 hover:scale-105 transition-all duration-200 border border-zinc-800">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/f3f9336f-71af-4264-843a-eccdb284790b.jpg?"
                                        alt="KAPVOE Elite Performance Sunglasses - Detail View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 hover:scale-105 transition-all duration-200 border border-zinc-800">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/fd548de6-5a7d-4694-a578-8f9f9c0543b0.jpg?"
                                        alt="KAPVOE Elite Performance Sunglasses - Side View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 hover:scale-105 transition-all duration-200 border border-zinc-800">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/f3f9336f-71af-4264-843a-eccdb284790b.jpg?"
                                        alt="KAPVOE Elite Performance Sunglasses - Lens View"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 text-xs font-bold px-3 py-1">
                                    🔥 ELITE PERFORMANCE
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                    KAPVOE Elite Performance Sunglasses
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-orange-500 text-orange-500" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-zinc-400 font-medium">(3,847 verified athletes)</span>
                                </div>
                                <p className="text-lg text-zinc-300 leading-relaxed max-w-lg">
                                    Professional-grade sports eyewear with interchangeable REVO lenses. Dominate every adventure with UV400 protection and crystal-clear vision.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-black text-white">$89.99</span>
                                    <span className="text-xl text-zinc-500 line-through">$149.99</span>
                                    <Badge className="bg-red-600 text-white border-0 text-sm font-bold">
                                        40% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-500 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Eye, text: "UV400 Protection" },
                                    { icon: Zap, text: "REVO Lenses" },
                                    { icon: Award, text: "Pro Design" },
                                    { icon: Shield, text: "2-Year Warranty" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-800"
                                    >
                                        <feature.icon className="h-5 w-5 text-orange-500" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-zinc-300">Quantity:</span>
                                    <div className="flex items-center border-2 border-zinc-700 rounded-xl overflow-hidden bg-zinc-900">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-zinc-800 text-white">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-zinc-800 text-white">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                                    >
                                        ELEVATE YOUR PERFORMANCE - $89.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-bold rounded-xl border-2 border-zinc-700 hover:bg-zinc-900 text-white">
                                        Buy Now - Fast Checkout
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-zinc-400" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-zinc-500">Worldwide</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-zinc-400" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-zinc-500">No questions</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-zinc-400" />
                                    <div>
                                        <p className="text-sm font-semibold">2-Year Warranty</p>
                                        <p className="text-xs text-zinc-500">Full coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-zinc-800 rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium text-zinc-400 data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium text-zinc-400 data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                                    Tech Specs
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium text-zinc-400 data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium text-zinc-400 data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-white">Elite Performance Technology</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Interchangeable REVO Lenses",
                                                    description: "Multiple lens options for all light conditions - from bright sun to low light",
                                                },
                                                {
                                                    title: "UV400 Protection",
                                                    description: "Complete protection from harmful UVA and UVB rays",
                                                },
                                                {
                                                    title: "Myopia Frame Compatible",
                                                    description: "Prescription lens compatible design for athletes who need corrective vision",
                                                },
                                                {
                                                    title: "Aerodynamic Design",
                                                    description: "Wind-tunnel tested frame with strategic ventilation prevents fogging",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-white">{feature.title}</h4>
                                                        <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-zinc-800 rounded-2xl shadow-sm overflow-hidden flex items-center justify-center border border-zinc-700">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/fd548de6-5a7d-4694-a578-8f9f9c0543b0.jpg?"
                                            alt="KAPVOE Elite Performance Sunglasses features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-zinc-700 bg-zinc-800">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl text-white">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "Frame Material", value: "TR90 Polymer" },
                                                { label: "Lens Technology", value: "REVO Coating" },
                                                { label: "UV Protection", value: "UV400 (100%)" },
                                                { label: "Weight", value: "28 grams" },
                                                { label: "Lens Width", value: "75mm" },
                                                { label: "Bridge Width", value: "15mm" },
                                                { label: "Temple Length", value: "125mm" },
                                                { label: "Warranty", value: "2 years" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-zinc-700 last:border-0"
                                                >
                                                    <span className="text-zinc-400 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-white">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-white">What's Included</h3>
                                        <div className="bg-zinc-800 rounded-2xl p-6 shadow-sm space-y-4 border border-zinc-700">
                                            {[
                                                "1x KAPVOE Elite Performance Frame",
                                                "3x Interchangeable REVO Lenses",
                                                "1x Hard Shell Protective Case",
                                                "1x Microfiber Cleaning Cloth",
                                                "1x Adjustable Sports Strap",
                                                "1x Myopia Frame Insert",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-orange-500" />
                                                    <span className="text-zinc-300">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-zinc-700 bg-zinc-800">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-white">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-orange-500 text-orange-500" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-zinc-400 font-medium">Based on 3,847 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8 text-zinc-400">{stars}★</span>
                                                    <div className="flex-1 bg-zinc-700 rounded-full h-3">
                                                        <div
                                                            className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "10%" : "5%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-zinc-400 font-medium w-16 text-right">
                                                        {stars === 5 ? "3,270" : stars === 4 ? "385" : "192"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Alex Thompson",
                                                avatar: "AT",
                                                rating: 5,
                                                date: "2 days ago",
                                                title: "Game changer for cycling!",
                                                content:
                                                    "These are hands down the best sports sunglasses I've owned. The lens clarity is incredible and switching lenses is super easy.",
                                            },
                                            {
                                                name: "Maria Rodriguez",
                                                avatar: "MR",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Professional quality",
                                                content:
                                                    "As a trail runner, I need reliable eye protection. These deliver on every level - comfort, clarity, and durability.",
                                            },
                                            {
                                                name: "James Chen",
                                                avatar: "JC",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Worth every penny",
                                                content:
                                                    "The myopia frame compatibility sold me. Finally sports sunglasses that work with my prescription!",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-zinc-700 bg-zinc-800">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <Image
                                                                src="/placeholder-user.jpg"
                                                                alt={review.name}
                                                                width={48}
                                                                height={48}
                                                                className="rounded-full"
                                                            />
                                                            <AvatarFallback className="bg-zinc-700 text-zinc-300 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-white">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-orange-500 text-orange-500" : "text-zinc-600"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-zinc-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-white">{review.title}</h4>
                                                            <p className="text-zinc-400 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How do I change the lenses?",
                                                answer:
                                                    "Simply press the release button on the frame and gently pull the lens out. Insert the new lens until you hear a click. It takes less than 10 seconds!",
                                            },
                                            {
                                                question: "Are these suitable for prescription lenses?",
                                                answer:
                                                    "Yes! The included myopia frame insert allows you to add prescription lenses while still enjoying the benefits of our REVO outer lenses.",
                                            },
                                            {
                                                question: "Which lens should I use for different conditions?",
                                                answer:
                                                    "Dark lens for bright sun, yellow lens for low light/dawn/dusk, and clear lens for night or indoor use. All provide UV400 protection.",
                                            },
                                            {
                                                question: "How durable are these sunglasses?",
                                                answer:
                                                    "The TR90 frame is virtually unbreakable and the lenses are impact-resistant. They're built for intense athletic use and backed by our 2-year warranty.",
                                            },
                                            {
                                                question: "Do they fog up during exercise?",
                                                answer:
                                                    "Our aerodynamic design with strategic ventilation prevents fogging. The anti-fog coating on the lenses provides additional protection.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-zinc-800 rounded-xl px-6 shadow-sm border border-zinc-700"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-white">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left text-white">
                            Complete Your Setup
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { name: "Sports Strap Pro", price: "$14.99", image: "Sports strap" },
                                { name: "Lens Cleaning Kit", price: "$9.99", image: "Cleaning kit" },
                                { name: "Extra Lens Set", price: "$39.99", image: "Lens set" },
                                { name: "Premium Case", price: "$24.99", image: "Premium case" },
                            ].map((product, i) => (
                                <Card
                                    key={i}
                                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-zinc-700 shadow-sm bg-zinc-900"
                                >
                                    <CardContent className="p-4">
                                        <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl mb-4 overflow-hidden">
                                            <Image
                                                src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/f3f9336f-71af-4264-843a-eccdb284790b.jpg?"
                                                alt={product.image}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-2 text-white text-sm lg:text-base">{product.name}</h3>
                                        <p className="text-lg font-bold text-white">{product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-800 bg-zinc-900 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="KAPVOE Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">KAPVOE</span>
                        </div>
                        <p className="text-sm text-zinc-500 text-center sm:text-right">© 2024 KAPVOE Elite Performance. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}