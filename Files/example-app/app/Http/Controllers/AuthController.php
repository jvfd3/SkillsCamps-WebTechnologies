<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function registration(Request $request){
        $input = $request->all();

        $user = User::create([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:3',
            'first_name' => 'required|min:2',
            'last_name' => 'required',
        ]);

        if($validor->fails()){
            return new JsonResponse([
                'success' => false,
                'code' => 422,
                'message' => $validator->errors(),
            ]);
        }

        $user = User>>create([
            'email' => $request->email,
            'password' => $request->password,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
        ]);

        $token = $user -> token = Str::random(60);
        $user -> save();

        return new JsonResponse([
            'data' => [
                'success' => true,
                'code' => 201,
                'message' => 'Success',
                'token' => $token,
            ]
        ], 201);
    }



    /*
    Method authorization user
    @param Request $request
    @return JsonResponse
    */
    public function authorization( Request $request){
        $input = $request->all();

        $validator = Validator::make($input, [
            'email' => 'required|email',
            'password' => 'required|min:3',
        ]);

        if($validator->fails()){
            return new JsonResponse([
                'success' => false,
                'code' => 422,
                'message' => $validator->errors(),
            ], 422);
        }

        $user = User::where('email', $request->email)
                    ->where('password', $request->password)
                    ->first();

        if(!$user){
            return new JsonResponse([
                'data' => [
                    'success' => false,
                    'code' => 401,
                    'message' => $validator->errors(),
                ]
            ], 401);
        }

        $token = $user->token = Str::random(60);
        $user->save();

        return new JsonResponse([
            'data' => [
                'success' => true,
                'code' => 201,
                'message' => 'Success',
                'token' => token,
            ], 201
        ]);
    }


    public function logout(Request $request){
        $user = User::where('token', $request->bearerToken())->first();

        $user->token = '';
        $user->save();

        return new JsonResponse([
            'message' => 'Logout',
        ], 204);
    }


}
