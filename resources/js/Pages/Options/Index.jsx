import { Head, Link, router, useForm, usePage } from "@inertiajs/react";

import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import Tab from "@/Components/UI/Tab";
import { useState } from "react";

/**
 * TODO - Change Tab to Pages
 * Options Lists - Nav or use route.visit - route.visit('/options/colors')
 * Route::get('/options/{table}', function($table){ ... })
 * Options controller use same page - sending query via props
 * $options = ['colors' => Color::all(), 'coners' => Corners::all(), ...]
 * Inertia.render('Options/Index', [ options => $options->$table ])
 */

const Options = ({ options_keys, options = [] }) => {
  console.log(options);

  return (
    <>
      <Head title="Option" />
      <Header>
        <div className="flex justify-between align-center">
          <h1 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            Options
          </h1>
        </div>
      </Header>
      <Main>
        <Tab options={options_keys} />
        <div className="space-y-2">
          {options.map(({ id, name }) => (
            <p
              key={id}
              className="w-full border border-gray-300 px-2 py-2 rounded"
            >
              {name}
            </p>
          ))}
        </div>
      </Main>
    </>
  );
};

export default Options;
