// lib/wordpress-products.js

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;
const WOOCOMMERCE_API_URL = process.env.WOOCOMMERCE_API_URL;
const WOOCOMMERCE_API_URL_V2 = process.env.WOOCOMMERCE_API_URL_V2;

// WooCommerce authentication (if needed)
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY;
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET;

/**
 * Fetch API helper function
 */
async function fetchAPI(endpoint, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 10 }
  };

  try {
    const res = await fetch(endpoint, {
      ...defaultOptions,
      ...options,
    });

    if (!res.ok) {
      throw new Error(`API call failed: ${res.status} - ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
}


/**
 * Method 2: Fetch WooCommerce Products (if using WooCommerce)
 */
export async function getAllWooCommerceProducts(perPage = 100, page = 1) {
  try {
    const url = new URL(`${WOOCOMMERCE_API_URL}/products`);
    url.searchParams.append('per_page', perPage);
    url.searchParams.append('page', page);
    
    // Add authentication if credentials are available
    if (WC_CONSUMER_KEY && WC_CONSUMER_SECRET) {
      url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
      url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
    }

    const products = await fetchAPI(url.toString());
    return products;
  } catch (error) {
    console.error('Error fetching WooCommerce products:', error);
    return [];
  }
}

/**
 * Fetch all products with pagination (handles large datasets)
 */
export async function getAllProductsPaginated() {
  let allProducts = [];
  let page = 1;
  let hasMore = true;
  const perPage = 100;

  try {
    while (hasMore) {
      const url = new URL(`${WOOCOMMERCE_API_URL}/products`);
      url.searchParams.append('per_page', perPage);
      url.searchParams.append('page', page);
      
      if (WC_CONSUMER_KEY && WC_CONSUMER_SECRET) {
        url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
        url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
      }

      const products = await fetchAPI(url.toString());
      
      if (products.length === 0) {
        hasMore = false;
      } else {
        allProducts = [...allProducts, ...products];
        page++;
      }
    }

    return allProducts;
  } catch (error) {
    console.error('Error fetching all products:', error);
    return allProducts; // Return whatever we've fetched so far
  }
}

/**
 * Fetch single product by slug
 */
export async function getProductBySlug(slug) {
  try {
    const products = await fetchAPI(
      `${WOOCOMMERCE_API_URL_V2}/product/${slug}`
    );
    
    return products || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

/**
 * Fetch products by category
 */
export async function getProductsByCategory(categoryId, perPage = 100) {
  try {
    const url = new URL(`${WOOCOMMERCE_API_URL}/products`);
    url.searchParams.append('category', categoryId);
    if (WC_CONSUMER_KEY && WC_CONSUMER_SECRET) {
      url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
      url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
    }
    const products = await fetchAPI(url.toString());
    return products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}

/**
 * Fetch product categories
 */
export async function getProductCategories() {
  try {
    const url = new URL(`${WOOCOMMERCE_API_URL_V2}/product-categories`);
    url.searchParams.append('hide_empty', 0);
    url.searchParams.append('per_page', 100);
    
    // if (WC_CONSUMER_KEY && WC_CONSUMER_SECRET) {
    //   url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
    //   url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
    // }

    const categories = await fetchAPI(url.toString());
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Search products
 */
export async function searchProducts(searchTerm, perPage = 20) {
  try {
    const url = new URL(`${WOOCOMMERCE_API_URL}/products`);
    url.searchParams.append('search', searchTerm);
    url.searchParams.append('per_page', perPage);
    
    if (WC_CONSUMER_KEY && WC_CONSUMER_SECRET) {
      url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
      url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
    }

    const products = await fetchAPI(url.toString());
    return products;
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
}