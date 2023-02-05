<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::query()->orderBy('updated_at', 'desc')->paginate(5);
        return view('product.index', [
            'products' => $product
        ]);
    }

    public function show(Product $product)
    {
        return view('product.show', [
            'product' => $product
        ]);
    }
}
