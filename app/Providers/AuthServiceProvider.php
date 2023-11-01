<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Product;
use App\Models\Production;
use App\Models\ProductionOrderStatus;
use App\Models\User;
use App\Models\Yarn;
use App\Policies\ProductionOrderStatusPolicy;
use App\Policies\ProductionPolicy;
use App\Policies\ProductPolicy;
use App\Policies\UserPolicy;
use App\Policies\YarnPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => UserPolicy::class,
        Production::class => ProductionPolicy::class,
        Product::class => ProductPolicy::class,
        Yarn::class => YarnPolicy::class,
        ProductionOrderStatus::class => ProductionOrderStatusPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
